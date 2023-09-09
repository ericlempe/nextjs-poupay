import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core'
import { users } from './user'
import { categories } from './category'
import { typesExpenses } from './typeExpense'

export const expenses = pgTable('expenses', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 256 }).notNull(),
  description: varchar('description', { length: 256 }).notNull(),
  dueDate: timestamp('dueDate').notNull(),
  categoryId: integer('categoryId')
    .notNull()
    .references(() => categories.id),
  typeExpenseId: integer('typeExpenseId')
    .notNull()
    .references(() => typesExpenses.id),
  userId: integer('userId')
    .notNull()
    .references(() => users.id),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
})

export type NewExpense = typeof expenses.$inferInsert
export type Expense = typeof expenses.$inferSelect
