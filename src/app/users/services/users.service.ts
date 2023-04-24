import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { environmentNetwork } from 'src/environments/environment'
import { User, UsersResponse } from 'src/app/core/models/users.model'

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
