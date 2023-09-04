import {
  integer,
  timestamp,
  pgTable,
  serial,
  uniqueIndex,
  varchar,
  boolean,
} from 'drizzle-orm/pg-core'
import { providers } from './provider'

export const users = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
    email: varchar('email', { length: 256 }).notNull(),
    biometry: boolean('biometry').default(false).notNull(),
    providerId: integer('providerId')
      .notNull()
      .references(() => providers.id),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
  },
  (users) => {
    return {
      nameIndex: uniqueIndex('uniqueEmail').on(users.email),
    }
  },
)
