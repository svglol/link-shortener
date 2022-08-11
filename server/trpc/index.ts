import { links } from './routes/links';
import * as trpc from '@trpc/server';
export const router = trpc.router().merge('links.', links);
