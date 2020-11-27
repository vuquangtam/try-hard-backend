import { Module } from '@nestjs/common';
import { PostType } from '../post/entities';
import { PostModule } from '../post/post.module';
import { PostTypeService } from '../post/services';

@Module({
  imports: [
      PostModule
  ],
})
export class MediaModule {
    constructor (private postTypeService: PostTypeService) {
        const postType = new PostType();

        postType.name = 'media';
        postType.fields = [
            'name',
            'url'
        ];

        postTypeService.create(postType);
    }
}
