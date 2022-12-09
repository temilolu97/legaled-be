import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user-dto';
import { WatchlistuserService } from './watchlistuser.service';

@Controller('watchlistuser')
export class WatchlistuserController {
    constructor(private watchlistuserService: WatchlistuserService){}
    @Post()
    async AddUser(@Body() createUserDto:CreateUserDto){
        return this.watchlistuserService.createUser(createUserDto)
    }

    @Get()
    async GetAllUsers(){
        return this.watchlistuserService.getAllUsers()
    }
}
