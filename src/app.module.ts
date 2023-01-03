import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { VideosController } from './videos/videos.controller';
import { VideosService } from './videos/videos.service';
import { UsersService } from './users/users.service';
import { ChannelsModule } from './channels/channels.module';
import { UsersModule } from './users/users.module';
import { VideosModule } from './videos/videos.module';
import { CommentsModule } from './comments/comments.module';
import { AnswersModule } from './answers/answers.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'mysql79.hostland.ru',
      port: 3306,
      username: 'host1847338_gdtube',
      password: 'gdtube_2022',
      database: 'host1847338_tube',
      models: [],
      autoLoadModels: true,
      synchronize: true,
    }),
    ChannelsModule,
    UsersModule,
    VideosModule,
    CommentsModule,
    AnswersModule,
  ],
  controllers: [AppController, UsersController, VideosController],
  providers: [AppService, VideosService, UsersService],
})
export class AppModule {}
