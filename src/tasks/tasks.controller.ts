import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './tasks.model';
import { TasksService } from './tasks.service';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Get('/:id')
  // @Get('/id')
  getTaskByIdid(@Param('id') id: string) {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  @ApiBody({ type: CreateTaskDto })
  createTask(@Body() createTaskDto: CreateTaskDto) {
    console.log(createTaskDto);
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string) {
    return this.tasksService.deleteTask(id);
  }

  @Patch('/:id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: TaskStatus) {
    return this.tasksService.updateTaskstatus(id, status);
  }
}
