import { Injectable } from '@nestjs/common';
import { CreatePostInput, UpdatePostInput } from '../dtos';
import { PostRepo } from '../repos';

@Injectable()
export class PostsService {
  constructor(private repo: PostRepo) {}

  async create(createPostInput: CreatePostInput) {
    const post = this.repo.create(createPostInput);

    post.createdAt = new Date();
    post.updatedAt = new Date();

    await this.repo.save(post);

    return post;
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: string) {
    return await this.repo.findOne(id);
  }

  async update(id: string, updatePostInput: UpdatePostInput) {
    const post = this.repo.create(updatePostInput);

    post.updatedAt = new Date();

    await this.repo.update(id, updatePostInput);

    return post;
  }

  async remove(id: string) {
    const post = await this.findOne(id);

    if (!post) {
      throw 'Post not found!';
    }

    await this.repo.delete(post);

    return post;
  }
}
