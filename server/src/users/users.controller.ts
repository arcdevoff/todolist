import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';
import { UsersService } from './users.service';
import type { Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersSerivce: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  async findMe(@Req() req: Request) {
    return this.usersSerivce.getUser(req.user.id);
  }
}
