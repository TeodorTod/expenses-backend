import { Injectable } from '@nestjs/common';
import { CreateAuthorizationDto } from './dto/create-authorization.dto';
import { UpdateAuthorizationDto } from './dto/update-authorization.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Authorization } from './schemas/authorization.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthorizationService {

  constructor(@InjectModel(Authorization.name) private AuthorizationModel: Model<Authorization>) {}


  create(createAuthorizationDto: CreateAuthorizationDto) {
    const userToSave = new this.AuthorizationModel(createAuthorizationDto);
    return userToSave.save();
  }

  findAll() {
    return `This action returns all authorization`;
  }

  findOne(id: number) {
    return `This action returns a #${id} authorization`;
  }

  update(id: number, updateAuthorizationDto: UpdateAuthorizationDto) {
    return `This action updates a #${id} authorization`;
  }

  remove(id: number) {
    return `This action removes a #${id} authorization`;
  }
}
