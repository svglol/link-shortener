import { sql } from 'drizzle-orm'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const links = sqliteTable('links', {
  id: text('id').primaryKey().unique(),
  createdAt: text('created_at').notNull().default(sql`CURRENT_TIMESTAMP`),
  url: text('url').notNull(),
  uuid: text('uuid').notNull(),
})
