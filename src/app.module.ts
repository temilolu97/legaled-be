import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { WatchlistuserModule } from './watchlistuser/watchlistuser.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://temilolu97:Temiloluwa97@cluster0.yi8w8da.mongodb.net/?retryWrites=true&w=majority'), WatchlistuserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
