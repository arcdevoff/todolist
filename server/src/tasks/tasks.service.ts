import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { DeleteTask, UpdateTaskStatus } from 'src/@types/task';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(userId: number) {
    return this.prisma.task.findMany({
      where: { user_id: userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async updateStatus({ id, completed, user_id }: UpdateTaskStatus) {
    return this.prisma.task.update({
      where: { id, user_id },
      data: {
        status: completed ? 'completed' : 'pending',
      },
    });
  }

  async delete({ id, user_id }: DeleteTask) {
    return this.prisma.task.deleteMany({
      where: { id, user_id },
    });
  }

  async create(dto: CreateTaskDto & { user_id: number }) {
    return this.prisma.task.create({
      data: {
        title: dto.title,
        user_id: dto.user_id,
      },
    });
  }
}
