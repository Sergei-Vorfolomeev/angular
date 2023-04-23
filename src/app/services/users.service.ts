import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { environmentNetwork } from 'src/environments/environment'

export interface UsersResponse {
  items: User[]
  totalCount: number
  error: null | string
}

export interface UserPhotos {
  small?: string | null
  large?: string | null
}

export interface User {
  name: string
  id: number
  photos: UserPhotos
  status?: string | null
  followed: boolean
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<User[]> {
    return this.http
      .get<UsersResponse>(`${environmentNetwork.baseUrl}/users?page=${page}`)
      .pipe(map(el => el.items))
  }
}
