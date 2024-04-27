import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const links = sqliteTable('links', {
  id: text('id').primaryKey().unique(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`(unixepoch())`),
  url: text('url').notNull(),
  uuid: text('uuid').notNull(),
  qrCode: text('qr_code').notNull(),
})
