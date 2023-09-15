import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorizationModule } from './authorization/authorization.module';
import { ExpensesModule } from './expenses/expenses.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthorizationModule, 
    ExpensesModule,
    MongooseModule.forRoot('mongodb+srv://teodor:teodor1991@cluster0.4pqun8m.mongodb.net/?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
