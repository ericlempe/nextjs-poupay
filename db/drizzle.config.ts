import type { Config } from 'drizzle-kit'
import { config } from 'dotenv'
import { z } from 'zod'

config({
  path: '.env.local',
})

const databaseUrl = z.string().url().parse(process.env.DATABASE_URL)

export default {
  schema: './schemas/*',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: databaseUrl,
  },
} satisfies Config
