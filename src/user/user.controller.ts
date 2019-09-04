import { Controller, Get } from "@nestjs/common";
import { Observable } from "rxjs";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {

    }

    @Get()
    findAll(): Observable<User[]> {
        return "Success";
    }
}