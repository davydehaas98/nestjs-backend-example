import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param() params): Promise<User> {
        return null;
        // return this.userService.findOne(params.id);
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        this.userService.create(createUserDto);
    }
}
