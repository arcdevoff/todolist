import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';
import { TasksService } from './tasks.service';
import type { Request } from 'express';
import { CreateTaskDto } from './dto/create-task.dto';

@UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksSerivce: TasksService) {}

  @Get('/')
  async findAll(@Req() req: Request) {
    return this.tasksSerivce.findAll(req.user.id);
  }

  @Post('/')
  async create(@Req() req: Request, @Body() dto: CreateTaskDto) {
    return this.tasksSerivce.create({ ...dto, user_id: req.user.id });
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  async delete(@Req() req: Request, @Param('id') id: string) {
    await this.tasksSerivce.delete({
      id: Number(id),
      user_id: req.user.id,
    });
  }

  @Patch('/:id/status')
  @HttpCode(HttpStatus.OK)
  async updateStatus(
    @Req() req: Request,
    @Param('id') id: string,
    @Body() body: { completed: boolean },
  ) {
    await this.tasksSerivce.updateStatus({
      id: Number(id),
      completed: body.completed,
      user_id: req.user.id,
    });
  }
}
