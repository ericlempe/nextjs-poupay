import { neon, neonConfig } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'

neonConfig.fetchConnectionCache = true

const client = neon(process.env.DATABASE_URL ?? '')
const db = drizzle(client)

export default db
