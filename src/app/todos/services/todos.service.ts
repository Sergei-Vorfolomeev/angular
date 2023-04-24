import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { BehaviorSubject, catchError, EMPTY, map } from 'rxjs'
import { environmentTodo } from 'src/environments/environment'
import { Data, Todo, TodoResponse } from 'src/app/core/models/todos.model'

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([])

  constructor(private http: HttpClient) {}

  httpOptions = {
    withCredentials: true,
    headers: {
      'api-key': `${environmentTodo.apiKey}`,
    },
  }

  getTodos() {
    this.http
      .get<Todo[]>(`${environmentTodo.baseUrl}/todo-lists`, this.httpOptions)
      .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe(res => {
        this.todos$.next(res)
      })
  }

  addTodo(title: string) {
    this.http
      .post<TodoResponse<Data>>(
        `${environmentTodo.baseUrl}/todo-lists`,
        { title },
        this.httpOptions
      )
      .pipe(
        map(res => {
          const newTodo = res.data.item
          const stateTodos = this.todos$.getValue()
          return [newTodo, ...stateTodos]
        }),
        catchError(this.errorHandler.bind(this))
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  deleteTodo(todolistId: string) {
    this.http
      .delete<TodoResponse>(`${environmentTodo.baseUrl}/todo-lists/${todolistId}`, this.httpOptions)
      .pipe(
        map(() => {
          return this.todos$.getValue().filter(el => el.id !== todolistId)
        }),
        catchError(this.errorHandler.bind(this))
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  private errorHandler(err: HttpErrorResponse) {
    alert(err.message)
    return EMPTY
  }
}
