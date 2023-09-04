import { integer, pgTable, serial, timestamp } from 'drizzle-orm/pg-core'
import { users } from './user'

export const incomes = pgTable('incomes', {
  id: serial('id').primaryKey(),
  month: integer('month').notNull(),
  year: integer('year').notNull(),
  userId: integer('userId')
    .notNull()
    .references(() => users.id),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
})
