import {UpdateEntity} from '../database/slate/update/update.entity';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';
import {UpdateRepository} from '../database/slate/update/update.repository';

@Injectable()
export class UpdatePipe implements PipeTransform {
  constructor(private readonly updateRepo: UpdateRepository) {}

  async transform(updateID: number): Promise<UpdateEntity> {
    try {
      return await this.updateRepo.findOneByIDOrFail(updateID);
    } catch (e) {
      throw new NotFoundException('Update does not exist');
    }
  }
}
