import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class ConfigService {
  private readonly envConfig: Record<string, string>;

  constructor() {
    this.envConfig = {
      ...process.env,
      currency : 'usd',
      version: '2023-10-16',
      paymentMethod: 'card'
    };
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
