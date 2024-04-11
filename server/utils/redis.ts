import {Redis} from 'ioredis'
require('dotenv').config()

const redisUrl:string = process.env.REDIS_URL || ''

const redisClient = () => {
if (redisUrl){
   console.log('Redis connected')
   return redisUrl
}
  throw new Error('Redis connection failed!!!');
}

export const redis = new Redis(redisClient())
