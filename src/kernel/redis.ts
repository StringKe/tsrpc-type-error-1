import Redis from 'ioredis'

class RedisHelper extends Redis {}

export const redis = new RedisHelper({
    port: 6379,
    host: '127.0.0.1',
    enableOfflineQueue: true,
    offlineQueue: true,
})

export default redis
