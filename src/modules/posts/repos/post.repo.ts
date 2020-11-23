import { EntityRepository, Repository } from 'typeorm'
import { Post } from '../entities'

@EntityRepository(Post)
export class PostRepo extends Repository<Post> {

}