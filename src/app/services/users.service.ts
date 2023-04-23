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

  httpOptions = {
    withCredentials: true,
    headers: {
      'api-key': `${environmentNetwork.apiKey}`,
    },
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get<UsersResponse>(`${environmentNetwork.baseUrl}/users`, this.httpOptions)
      .pipe(map(el => el.items))
  }
}
