import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    TodoListComponent
  ],
})
export class AppModule { }
