import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dtos/create-user-dto';
import { WatchlistUser, WatchlistUserDocument  } from '../schemas/watchlistusers.schema';

@Injectable()
export class WatchlistuserService {
    constructor(@InjectModel(WatchlistUser.name) private watchlistUserModel:Model<WatchlistUserDocument>){}

    async createUser(createUserDto: CreateUserDto){
        let user = new this.watchlistUserModel(createUserDto)
        return user.save()
    }

    async getAllUsers():Promise<any>{
        let users = this.watchlistUserModel.find().exec()
        return users
    }
}
