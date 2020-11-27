import { Mapper } from "src/core/infra";
import { User } from '../entities';

export class UserMapper extends Mapper<User> {
    public static toPersistence (user: User): any {
    }

    public static toDomain (raw: any): User {
        return new User();
    }
}