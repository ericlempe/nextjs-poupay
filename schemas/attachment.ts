import { pgTable, serial, varchar } from 'drizzle-orm/pg-core'

export const attachments = pgTable('attachments', {
  id: serial('id').primaryKey(),
  hash: varchar('hash', { length: 256 }).notNull(),
  path: varchar('path', { length: 256 }).notNull(),
})

export type NewAttachment = typeof attachments.$inferInsert
export type Attachment = typeof attachments.$inferSelect
