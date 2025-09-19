import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @Transform(({ value }) => value?.trim())
  @IsNotEmpty({ message: 'Title is required' })
  @MinLength(1)
  @MaxLength(255, { message: 'Title is too long' })
  title: string;
}
