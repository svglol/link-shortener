import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { PrismaClient } from '@prisma/client'
export const appRouter = router({
  list: publicProcedure
    .input(
      z.object({
        uuid: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.link.findMany({
        where: { uuid: input.uuid },
        orderBy: {
          createdAt: 'desc',
        },
      })
    }),
  get: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.link.findUnique({
        where: { id: input.id },
      })
    }),
  create: publicProcedure
    .input(
      z.object({
        url: z.string(),
        uuid: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.link.create({
        data: {
          id: await makeID(ctx.prisma),
          url: input.url,
          uuid: input.uuid,
        },
      })
    }),
  delete: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.link.delete({
        where: { id: input.id },
      })
    }),
})

// export type definition of API
export type AppRouter = typeof appRouter

async function makeID(prisma: PrismaClient) {
  const length = 5
  const links = await prisma.link.findMany()
  let result = ''
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    if (result.length === length) {
      const filtered = links.filter(link => link.id === result)
      if (filtered.length > 0) {
        result = ''
        i = -1
      }
    }
  }
  return result
}
