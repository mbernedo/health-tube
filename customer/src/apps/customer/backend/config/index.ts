import 'dotenv/config';
export default class Configuration {
  static readonly MONGO_ATLAS_SRV = `${process.env.MONGO_ATLAS_SRV}`;
  static readonly NATS_HOST = `${process.env.NATS_HOST}`;
  static readonly AIRBRAKE_PROJECT_ID = Number(process.env.AIRBRAKE_PROJECT_ID || 1);
  static readonly AIRBRAKE_PROJECT_KEY = process.env.AIRBRAKE_PROJECT_KEY || '';
  static readonly PORT = process.env.PORT || 4000;
}
