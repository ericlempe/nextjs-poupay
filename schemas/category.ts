import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core'
import { users } from './user'

export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  iconId: integer('iconId').notNull(),
  description: varchar('description', { length: 256 }).notNull(),
  userId: integer('userId')
    .notNull()
    .references(() => users.id),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
})

export type NewCategory = typeof categories.$inferInsert
export type Category = typeof categories.$inferSelect
