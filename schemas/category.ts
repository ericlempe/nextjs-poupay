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
  icon: varchar('icon', { length: 256 }).notNull(),
  description: varchar('description', { length: 256 }).notNull(),
  userId: integer('userId')
    .notNull()
    .references(() => users.id),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
})
