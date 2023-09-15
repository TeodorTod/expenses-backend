import { Module } from '@nestjs/common';
import { AuthorizationService } from './authorization.service';
import { AuthorizationController } from './authorization.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Authorization, AuthorizationSchema } from './schemas/authorization.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Authorization.name, schema: AuthorizationSchema }])],
  controllers: [AuthorizationController],
  providers: [AuthorizationService],
})
export class AuthorizationModule {}
