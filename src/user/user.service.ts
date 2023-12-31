import _ from 'lodash';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findByEmail(email: string) {
    return await this.userRepository.findOneBy({ email });
  }

  async findById(id: number) {
    return await this.userRepository.findOneBy({ id });
  }

  async decreasePoint(userId: number, point: number) {
    const user = await this.userRepository.findOneBy({ id: userId });
    user.point -= point;
    await this.userRepository.save(user);
  }

  async increasePoint(userId: number, point: number) {
    const user = await this.userRepository.findOneBy({ id: userId });
    user.point += point;
    await this.userRepository.save(user);
  }
}
