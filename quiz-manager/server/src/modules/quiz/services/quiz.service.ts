import { Inject, Injectable } from '@nestjs/common';
// import { QuizRepository } from './quiz.repository';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from '../entities/quiz.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private quizRepository: Repository<Quiz>,
  ) {}
  getAllQuiz() {
    return [1, 2, 3, 4, 'from the service'];
  }

  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOne({
      where: { id },
      relations: ['questions'], // Specify the related entity here
    });
  }

  async createNewQuiz(quiz: CreateQuizDto) {
    return await this.quizRepository.save(quiz);
  }
}
