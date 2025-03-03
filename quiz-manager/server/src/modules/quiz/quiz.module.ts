import { Module } from '@nestjs/common';

import { QuizController } from './controllers/quiz.controller';

import { QuizService } from './services/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { QuestionController } from './controllers/question.controller';
import { QuestionService } from './services/question.service';
import { Question } from './entities/question.entity';
import { Option } from './entities/option.entity';
import { OptionController } from './controllers/option.controller';
import { OptionService } from './services/option.service';
import { User } from '../user/user.entity';
import { UserController } from '../user/user.controller';
import { UserService } from '../user/user.service';

@Module({
  /**
   * The controllers property of the @Module decorator specifies the controllers that are associated with this module. In this case, it includes the QuizController.
   */
  controllers: [
    QuizController,
    QuestionController,
    OptionController,
    UserController,
  ],
  imports: [TypeOrmModule.forFeature([Quiz, Question, Option, User])],

  /**
   * The providers property of the @Module decorator specifies the services that are provided by this module. In this case, it includes the QuizService.
   */
  providers: [QuizService, QuestionService, OptionService, UserService],
})
export class QuizModule {}
//this module is depend on the provivers (QuizService) and that providers is then injected to the controllers (QuizController)
