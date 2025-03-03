import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { DataSource } from 'typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { Quiz } from './modules/quiz/entities/quiz.entity';
import { Question } from './modules/quiz/entities/question.entity';
import { Option } from './modules/quiz/entities/option.entity';
import { userInfo } from 'os';
import { User } from './modules/user/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV ? process.env.NODE_ENV : ''}.env`,
      isGlobal: true, // Makes ConfigService globally available
    }),
    QuizModule,
    //TypeOrmModule.forRootAsync({
    //  imports: [ConfigModule],
    //  inject: [ConfigService],
    // Use useFactory, useClass, or useExisting
    // to configure the DataSourceOptions.
    //  useFactory: (configService: ConfigService) => ({
    //     type: 'mysql',
    //     host: configService.get('DB_HOST') ?? 'localhost',
    //    port: configService.get('DB_PORT') ?? 3310,
    //    database: configService.get('DB_NAME') ?? 'quiz',
    //    username: configService.get('DB_USERNAME') ?? 'mysql',
    //   password: configService.get('DB_PASSWORD') ?? 'mysql',
    //  entities: [Quiz],
    //   synchronize: true,
    // }),
    // dataSource receives the configured DataSourceOptions
    // and returns a Promise<DataSource>.
    // dataSourceFactory: async (options) => {
    //    const dataSource = await new DataSource(options).initialize();
    //    return dataSource;
    //  },
    // }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3310,
      username: 'mysql',
      password: 'mysql',
      database: 'quiz',
      entities: [Option, Question, Quiz, User],
      synchronize: false,
      logging: true,
    }),
    UserModule,
    AuthModule,
  ],

  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}
