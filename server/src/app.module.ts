import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GoogleModule } from 'util/google/google.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    GoogleModule,
    // Other modules and providers
  ],
  controllers: [AuthController],
})
export class AppModule {}
