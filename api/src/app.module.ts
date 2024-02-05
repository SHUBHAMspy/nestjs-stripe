import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StripeModule } from './stripe/stripe.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [StripeModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
