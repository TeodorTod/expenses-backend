import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Expenses } from './schemas/expenses.schema';
import { Model } from 'mongoose';

@Injectable()
export class ExpensesService {

  constructor(
    @InjectModel(Expenses.name) private ExpensesModel: Model<Expenses>,
  ) {}

  create(createExpenseDto: CreateExpenseDto) {
    const expenseToSave = new this.ExpensesModel(createExpenseDto);
    return expenseToSave.save();
  }

  findAll() {
    return `This action returns all expenses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} expense`;
  }

  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    return `This action updates a #${id} expense`;
  }

  remove(id: number) {
    return `This action removes a #${id} expense`;
  }
}
