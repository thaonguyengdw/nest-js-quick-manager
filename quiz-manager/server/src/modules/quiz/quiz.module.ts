import { Module } from '@nestjs/common';

import { QuizController } from './controllers/quiz.controller';

import { QuizService } from './services/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { QuestionController } from './controllers/question.controller';
import { QuestionService } from './services/question.service';
import { Question } from './entities/question.entity';

@Module({
  /**
   * The controllers property of the @Module decorator specifies the controllers that are associated with this module. In this case, it includes the QuizController.
   */
  controllers: [QuizController, QuestionController],
  imports: [TypeOrmModule.forFeature([Quiz, Question])],

  /**
   * The providers property of the @Module decorator specifies the services that are provided by this module. In this case, it includes the QuizService.
   */
  providers: [QuizService, QuestionService],
})
export class QuizModule {}
//this module is depend on the provivers (QuizService) and that providers is then injected to the controllers (QuizController)
