import { Module } from '@nestjs/common';
import { PostType } from '../post/entities';
import { PostModule } from '../post/post.module';
import { PostTypeService } from '../post/services';

@Module({
  imports: [
      PostModule
  ],
})
export class OrderModule {
    constructor (private postTypeService: PostTypeService) {
        const postType = new PostType();

        postType.name = 'order';
        postType.fields = [
            'product_id',
            'quantity'
        ];

        postTypeService.create(postType);
    }
}
