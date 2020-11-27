import { Module } from '@nestjs/common';
import { PostType } from '../post/entities';
import { PostModule } from '../post/post.module';
import { PostTypeService } from '../post/services';

@Module({
  imports: [
      PostModule
  ],
})
export class ProductModule {
    constructor (private postTypeService: PostTypeService) {
        const postType = new PostType();

        postType.name = 'product';
        postType.fields = [
            'name',
            'description',
            'price'
        ];

        postTypeService.create(postType);
    }
}
