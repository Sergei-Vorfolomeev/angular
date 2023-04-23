import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environmentNetwork } from 'src/environments/environment'

interface MeResponse {
  data: {
    id: number
    login: string
    email: string
  }
  messages: string[]
  fieldErrors: string[]
  resultCode: number
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  isAuth = false

  me() {
    this.http.get<MeResponse>(`${environmentNetwork.baseUrl}/auth/me`).subscribe(res => {
      if (res.resultCode === 0) this.isAuth = true
    })
  }
}
