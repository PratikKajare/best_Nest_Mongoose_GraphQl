import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Mul } from './interfaces/mul.interface';

import { v4 as uuid } from 'uuid';
import { MulType } from './Entity/create.dto';

@Injectable()
export class MulService {
  constructor(@InjectModel('multiple') private MulModel: Model<Mul>) {}

  async findAll(): Promise<Mul[]> {
    return await this.MulModel.find().exec();
  }
  async AssignmentbyId(id: string): Promise<Mul> {
    return await this.MulModel.findOne({ id });
  }

  // async createAssignment(createMulDto: MulType): Promise<Mul> {
  //   const { title, dueDate, instructions } = createMulDto;
  //   console.log();

  //   const assignment = new this.MulModel({
  //     _id: uuid(),
  //     title,
  //     dueDate,
  //     instructions,
  //   });
  //   await assignment.save();
  //   return assignment;
  // }
}
