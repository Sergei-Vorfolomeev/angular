import { Component, OnInit } from '@angular/core'
import { Todo, TodosService } from 'src/app/todos/todos.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor(private todosService: TodosService) {}

  todos$!: Observable<Todo[]>
  error = ''

  ngOnInit(): void {
    this.todos$ = this.todosService.todos$
    this.getTodos()
  }

  getTodos() {
    this.todosService.getTodos()
  }

  addTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = `Title #${randomNumber}`
    this.todosService.addTodo(title)
  }

  deleteTodo(todolistId: string) {
    this.todosService.deleteTodo(todolistId)
  }
}
