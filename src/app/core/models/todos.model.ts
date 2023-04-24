export interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}

export interface TodoResponse<T = object> {
  data: T
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

export interface Data {
  item: Todo
}
