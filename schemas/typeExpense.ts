import { pgTable, serial, varchar } from 'drizzle-orm/pg-core'

export const typesExpenses = pgTable('typesExpenses', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
})
