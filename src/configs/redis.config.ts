import * as redis from 'redis';
import config from './config';

// const redisClient = redis.createClient();
const redisClient = redis.createClient({
    url: `${config.redis.host}:${config.redis.port}`
});;

(async () => {
    await redisClient.connect();
})();

redisClient.on('error', (err) => {
    console.error('Error connecting to Redis:', err);
});

redisClient.on('connect', () => {
    console.log('Connected to Redis');
});

export default redisClient;
