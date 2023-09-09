import {
  boolean,
  integer,
  pgTable,
  serial,
  timestamp,
} from 'drizzle-orm/pg-core'
import { users } from './user'

export const invoices = pgTable('invoices', {
  id: serial('id').primaryKey(),
  month: integer('month').notNull(),
  year: integer('year').notNull(),
  userId: integer('userId')
    .notNull()
    .references(() => users.id),
  wasPaid: boolean('wasPaid').default(false).notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
})

export type NewInvoice = typeof invoices.$inferInsert
export type Invoice = typeof invoices.$inferSelect
