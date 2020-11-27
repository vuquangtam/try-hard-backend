import { Injectable } from '@nestjs/common';
import { CreateUserInput, UpdateUserInput } from '../dtos';
import { UserRepo } from '../repos';

@Injectable()
export class UserService {
  constructor(private repo: UserRepo) {}

  async create(createUserInput: CreateUserInput) {
    const user = this.repo.create(createUserInput);

    user.createdAt = new Date();
    user.updatedAt = new Date();

    await this.repo.save(user);

    return user;
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: string) {
    return await this.repo.findOne(id);
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    const user = this.repo.create(updateUserInput);

    user.updatedAt = new Date();

    await this.repo.update(id, updateUserInput);

    return user;
  }

  async remove(id: string) {
    const user = await this.findOne(id);

    if (!user) {
      throw 'User not found!';
    }

    await this.repo.delete(user);

    return user;
  }
}
