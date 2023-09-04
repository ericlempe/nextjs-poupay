import { integer, pgTable, serial, timestamp } from 'drizzle-orm/pg-core'
import { earnings } from './earning'
import { incomes } from './income'

export const incomesEarnings = pgTable('incomesEarnings', {
  id: serial('id').primaryKey(),
  incomeId: integer('incomeId')
    .notNull()
    .references(() => incomes.id),
  earningId: integer('earningId')
    .notNull()
    .references(() => earnings.id),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
})
