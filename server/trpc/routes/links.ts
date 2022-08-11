import { PrismaClient } from '@prisma/client';
import * as trpc from '@trpc/server';
const prisma = new PrismaClient();
import { z } from 'zod';

export const links = trpc
  .router()
  .query('list', {
    input: z.object({
      uuid: z.string(),
    }),
    resolve({ input }) {
      return prisma.link.findMany({
        where: { uuid: input.uuid },
        orderBy: {
          createdAt: 'desc',
        },
      });
    },
  })
  .query('get', {
    input: z.object({
      id: z.string(),
    }),
    resolve({ input }) {
      return prisma.link.findUnique({
        where: {
          id: input.id,
        },
      });
    },
  })
  .mutation('create', {
    input: z.object({
      url: z.string(),
      uuid: z.string(),
    }),
    async resolve({ input }) {
      return prisma.link.create({
        data: {
          id: await makeID(),
          url: input.url,
          uuid: input.uuid,
        },
      });
    },
  })
  .mutation('delete', {
    input: z.object({
      id: z.string(),
    }),
    resolve({ input }) {
      return prisma.link.delete({
        where: { id: input.id },
      });
    },
  });

async function makeID() {
  const length = 5;
  const links = await prisma.link.findMany();
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    if (result.length === length) {
      const filtered = links.filter((link) => link.id === result);
      if (filtered.length > 0) {
        result = '';
        i = -1;
      }
    }
  }
  return result;
}
