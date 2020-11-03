import { Controller, Get, Post } from '@nestjs/common';
import { CreateTodoDto } from '../../entities/todos.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
    constructor(private readonly todoService: TodosService) {}

    @Get()
    getData() {
        return this.todoService.getData();
    }

    @Post()
    postData(todo:CreateTodoDto){
        console.log("posting....................");
        console.log(todo);
        return this.todoService.create(todo);
    }
}
