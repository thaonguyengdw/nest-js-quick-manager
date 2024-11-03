import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { Quiz } from './quiz.entity';
@Entity('questions')
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column({
    type: 'varchar',
  })
  question: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz;
}
