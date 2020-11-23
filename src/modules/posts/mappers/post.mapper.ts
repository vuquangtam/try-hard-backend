import { Mapper } from "src/core/infra";
import { Post } from '../entities';

export class PostMapper extends Mapper<Post> {
    public static toPersistence (post: Post): any {
    }

    public static toDomain (raw: any): Post {
        return new Post();
    }
}