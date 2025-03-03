import { IsNotEmpty, Length } from 'class-validator';

export class createOptionDto {
  @IsNotEmpty()
  @Length(2, 255)
  text: string;

  @IsNotEmpty()
  questionId: number;

  @IsNotEmpty()
  isCorrect: boolean;
}
