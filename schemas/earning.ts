import {
  decimal,
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core'
import { typesExpenses } from './typeExpense'
import { users } from './user'

export const earnings = pgTable('earnings', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 256 }).notNull(),
  paymentDate: timestamp('paymentDate').notNull(),
  value: decimal('value', { precision: 18, scale: 4 }).notNull(),
  typeExpenseId: integer('typeExpenseId')
    .notNull()
    .references(() => typesExpenses.id),
  userId: integer('userId')
    .notNull()
    .references(() => users.id),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
})
