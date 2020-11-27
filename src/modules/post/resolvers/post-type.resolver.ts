import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostType } from '../entities';
import { PostTypeService } from '../services';

@Resolver()
export class PostTypeResolver {
    constructor(private postTypeService: PostTypeService) {}

    @Query(() => [PostType], { name: 'postTypes' })
    findAll() {
        return this.postTypeService.findAll();
    }

    @Query(() => PostType, { name: 'postType' })
    findOne(@Args('id') id: string) {
        return this.postTypeService.findOne(id);
    }
}
