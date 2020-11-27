import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { services } from './services';
import { resolvers } from './resolvers';
import { repos } from './repos';

@Module({
  imports: [
    TypeOrmModule.forFeature(repos)
  ],
  providers: [
    ...services,
    ...resolvers
  ],
  exports: [
    ...services
  ]
})
export class PostModule {}
