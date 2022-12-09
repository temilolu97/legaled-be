import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { WatchlistUser, WatchlistUserSchema } from '../schemas/watchlistusers.schema';
import { WatchlistuserController } from './watchlistuser.controller';
import { WatchlistuserService } from './watchlistuser.service';

@Module({
    imports:[MongooseModule.forFeature([{name: WatchlistUser.name, schema: WatchlistUserSchema}])],
    controllers: [WatchlistuserController],
    providers: [WatchlistuserService]
})
export class WatchlistuserModule {}
