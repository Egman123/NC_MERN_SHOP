import Redis from "ioredis"
import dotenv from 'dotenv'

dotenv.config()
export const redis = new Redis(process.env.UPSTASH_REDIST_URL);
await redis.set('foo', 'bar')
// await client.set('foo', 'bar');