import dotenv from 'dotenv';
import path from 'path';
import Joi from 'joi';

dotenv.config({ path: path.join(__dirname, '../../.env') });

interface EnvVars {
  MONGO_URI: string;
  PORT: number;
  REDIS_HOST: string;
  REDIS_PORT: number;
}

const envVarsSchema = Joi.object<EnvVars>({
  MONGO_URI: Joi.string().required(),
  PORT: Joi.number().default(8080),
}).unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  port: envVars.PORT,
  db: {
    dbURI: envVars.MONGO_URI,
  },
  redis: {
    host: envVars.REDIS_HOST,
    port: envVars.REDIS_PORT,
  },
};

export default config;
