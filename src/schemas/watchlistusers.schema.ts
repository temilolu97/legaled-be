import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WatchlistUserDocument = HydratedDocument<WatchlistUser>;

@Schema()
export class WatchlistUser {
  @Prop({required: true })
  firstName: string;

  @Prop({ required: true })
  email: string;

}

export const WatchlistUserSchema = SchemaFactory.createForClass(WatchlistUser)