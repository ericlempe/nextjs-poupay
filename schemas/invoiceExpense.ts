import {
  decimal,
  integer,
  pgTable,
  serial,
  timestamp,
} from 'drizzle-orm/pg-core'
import { attachments } from './attachment'
import { expenses } from './expense'
import { invoices } from './invoice'

export const invoicesExpenses = pgTable('invoicesExpenses', {
  id: serial('id').primaryKey(),
  invoiceId: integer('invoiceId')
    .notNull()
    .references(() => invoices.id),
  expenseId: integer('expenseId')
    .notNull()
    .references(() => expenses.id),
  value: decimal('value', { precision: 18, scale: 4 }),
  paymentDate: timestamp('paymentDate'),
  attachmentId: integer('attachmentId').references(() => attachments.id),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
})
