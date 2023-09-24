import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ExpensesDocument = HydratedDocument<Expenses>;

@Schema()
export class Expenses {
    @Prop({ required: true })
    sum: number;

    @Prop({ required: true })
    type: string;

    @Prop({ required: true })
    date: string;

}

export const ExpensesSchema = SchemaFactory.createForClass(Expenses);