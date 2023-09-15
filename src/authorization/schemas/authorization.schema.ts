import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthorizationDocument = HydratedDocument<Authorization>;

@Schema()
export class Authorization {
    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    password: string;

}

export const AuthorizationSchema = SchemaFactory.createForClass(Authorization);