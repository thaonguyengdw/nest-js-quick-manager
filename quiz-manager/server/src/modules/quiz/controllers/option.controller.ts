import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OptionService } from '../services/option.service';
import { QuestionService } from '../services/question.service';
import { createOptionDto } from '../dto/create-option.dto';

@Controller('question/option')
export class OptionController {
  constructor(
    private optionSevice: OptionService,
    private questionService: QuestionService,
  ) {}

  @Post('')
  @UsePipes(ValidationPipe)
  async saveOptionToQuestion(@Body() createOption: createOptionDto) {
    const question = await this.questionService.findQuestionById(
      createOption.questionId,
    );

    const option = await this.optionSevice.createOption(createOption, question);
    return { question, createOption, option };
  }
}
