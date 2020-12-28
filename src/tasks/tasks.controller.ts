import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';

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
}
