import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Test } from '@nestjs/testing';
import { User } from './interfaces/user.interface';

describe('UserController', () => {
    let userController: UserController;
    let userService: UserService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
          controllers: [UserController],
          providers: [UserService],
        }).compile();
        userService = module.get<UserService>(UserService);
        userController = module.get<UserController>(UserController);
    });

    describe('findAll', () => {
        it('should return an array of users', async () => {
            const result: User[] = [
                {
                    id: 1,
                    name: 'test',
                    email: 'test@test.com',
                },
            ];
            jest.spyOn(userService, 'findAll').mockImplementation(() => result);

            expect(await userController.findAll()).toBe(result);
        });
    });
});
