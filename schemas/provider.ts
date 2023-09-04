import { pgTable, serial, varchar } from 'drizzle-orm/pg-core'

export const providers = pgTable('providers', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
})
