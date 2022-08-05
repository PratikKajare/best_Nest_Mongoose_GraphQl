import { Mutation, Query } from '@nestjs/graphql';
import { Args, Resolver } from '@nestjs/graphql';
import { MulType } from './Entity/create.dto';
import { MulInput } from './Entity/mul.input';
import { MulService } from './mul.service';

@Resolver((of) => MulType)
export class MulResolver {
  constructor(private MulService: MulService) {}
  @Query(() => String)
  async hello() {
    return 'helloo';
  }

  @Query(() => [MulType])
  async Assignments(): Promise<MulType[]> {
    return this.MulService.findAll();
  }
  @Query((returns) => MulType)
  AssignmentbyId(@Args('_id') id: string) {
    return this.MulService.AssignmentbyId(id);
  }

  // @Mutation((returns) => MulType)
  // async createAssign(@Args('input') input: MulInput) {
  //   return await this.MulService.createAssignment(input);
  // }
}
