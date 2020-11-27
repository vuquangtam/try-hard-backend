import { Injectable } from '@nestjs/common';
import { CreatePostTypeInput } from '../dtos';
import { PostType } from '../entities';

@Injectable()
export class PostTypeService {
    types: Map<string, PostType> =  new Map();

    constructor() {}

    create(createPostType: CreatePostTypeInput) {
        this.types.set(createPostType.name, createPostType);
    }

    findAll() {
        return [...this.types.values()];
    }

    findOne(id: string) {
        return this.types.get(id);
    }
}
