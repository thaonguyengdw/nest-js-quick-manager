import { HttpStatus, ValidationPipe } from '@nestjs/common';

const PASSWORD_RULE =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#!?@$%^&*-]).{8,}$/;
const PASSWORD_RULE_MESSAGE =
  'Password should have 1 uppercase letter, lowercase letter along with a number and a special character';

const VALIDATIONPIPE = new ValidationPipe({
  errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
});
export const REGEX = {
  PASSWORD_RULE,
};

export const MESSAGES = {
  PASSWORD_RULE_MESSAGE,
};

export const SETTINGS = {
  VALIDATIONPIPE,
};
