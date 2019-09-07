import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
    private readonly users: User[] = [];

    findAll(): User[] {
        return this.users;
    }

    create(user: User) {
        this.users.push(user);
    }
}
