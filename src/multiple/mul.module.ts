import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulResolver } from './mul.resolver';
import { MulSchema } from './mul.schema';
import { MulService } from './mul.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'multiple',
        schema: MulSchema,
      },
    ]),
  ],
  providers: [MulResolver, MulService],
})
export class CatsModule {}
