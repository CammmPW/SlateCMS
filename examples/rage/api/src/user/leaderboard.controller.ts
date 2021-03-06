import {User} from 'slate-rp-interfaces';
import {Controller, Get} from '@nestjs/common';
import {UserLeaderBoardService} from './leaderboard.service';
import {userWire} from '../database/rage/user/user/user.wire';
import {UserEntity} from '../database/rage/user/user/user.entity';

@Controller('users/leaderboard')
export class UserLeaderBoardController {
  constructor(private readonly userLeaderBoardService: UserLeaderBoardService) {}

  @Get('credits')
  async getMostCredits(): Promise<User[]> {
    const users: UserEntity[] = await this.userLeaderBoardService.getMostCredits();
    return users.map(user => userWire(user));
  }

  @Get('pixels')
  async getMostPixels(): Promise<User[]> {
    const users: UserEntity[] = await this.userLeaderBoardService.getMostPixels();
    return users.map(user => userWire(user));
  }

  @Get('points')
  async getMostPoints(): Promise<User[]> {
    const users: UserEntity[] = await this.userLeaderBoardService.getMostPoints();
    return users.map(user => userWire(user));
  }
}
