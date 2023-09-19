import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AuthorizationService } from './authorization.service';
import { AuthorizationController } from './authorization.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Authorization, AuthorizationSchema } from './schemas/authorization.schema';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { CheckUserExistenceMiddleware } from './check-user-existence.middleware'; // Import the middleware

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Authorization.name, schema: AuthorizationSchema }]),
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthorizationController, AuthController],
  providers: [AuthorizationService, AuthService],
})
export class AuthorizationModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckUserExistenceMiddleware)
      .forRoutes({ path: 'auth/login', method: RequestMethod.POST });
  }
}
