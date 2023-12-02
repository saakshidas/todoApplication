import { Component } from '@angular/core';
import { TodoListComponent } from "./todo-list/todo-list.component";

@Component({
    selector: 'app-app',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [TodoListComponent]
})
export class AppComponent {

    data: any[] = [];
    ngOnInit() {
        this.data = [
            {
                "title": "Task 1",
                "content": "Description for Task 1\nThis is a multi-line content for Task 1."
            },
            {
                "title": "Task 2",
                "content": "Description for Task 2\nThis is a multi-line content for Task 2."
            },
            {
                "title": "Task 3",
                "content": "Description for Task 3\nThis is a multi-line content for Task 3."
            },
            {
                "title": "Task 4",
                "content": "Description for Task 4\nThis is a multi-line content for Task 4."
            },
            {
                "title": "Task 5",
                "content": "Description for Task 5\nThis is a multi-line content for Task 5."
            },
            {
                "title": "Task 6",
                "content": "Description for Task 6\nThis is a multi-line content for Task 6."
            },
            {
                "title": "Task 7",
                "content": "Description for Task 7\nThis is a multi-line content for Task 7."
            },
            {
                "title": "Task 8",
                "content": "Description for Task 8\nThis is a multi-line content for Task 8."
            },
            {
                "title": "Task 9",
                "content": "Description for Task 9\nThis is a multi-line content for Task 9."
            },
            {
                "title": "Task 10",
                "content": "Description for Task 10\nThis is a multi-line content for Task 10."
            }
        ]
        console.log(this.data)
    }
}
