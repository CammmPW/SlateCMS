import {Repository} from 'typeorm';
import * as Random from 'randomstring';
import {HashService} from '../common';
import {UserEntity} from '../database';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class UserService {
  readonly eagerRelations: Array<keyof UserEntity> = ['rank', 'joinedGroups', 'badges', 'rooms', 'friends'];

  constructor(
    private readonly hashService: HashService,

    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  create(user: UserEntity): Promise<UserEntity> {
    return this.userRepository.save({
      ...user,
      password: this.hashService.generate(user.password),
    });
  }

  async createSSO(userID: number): Promise<string> {
    const authTicket: string = 'slate_' + Random.generate(50) + '_' + userID;
    await this.userRepository.update(userID, {authTicket});
    return authTicket;
  }

  getByID(userID: number): Promise<UserEntity> {
    return this.userRepository.findOneOrFail({
      where: {
        id: userID,
      },
      relations: this.eagerRelations,
    });
  }

  getByUsername(username: string): Promise<UserEntity> {
    return this.userRepository.findOneOrFail({
      where: {
        username,
      },
      relations: this.eagerRelations,
    });
  }

  getByEmail(email: string): Promise<UserEntity> {
    return this.userRepository.findOneOrFail({
      where: {
        email,
      },
      relations: this.eagerRelations,
    });
  }
}
