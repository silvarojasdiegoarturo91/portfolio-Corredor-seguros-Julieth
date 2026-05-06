import { defineConfig } from 'prisma/config'

const databaseUrl =
  process.env.DATABASE_URL ??
  'postgresql://user:password@localhost:5432/seguros_julieth?schema=public'

export default defineConfig({
  schema: './prisma/schema.prisma',
  datasource: {
    url: databaseUrl,
  },
})
