import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environmentNetwork } from 'src/environments/environment'
import { MeResponse } from 'src/app/core/models/auth.model'
import { ResultCode } from 'src/app/core/enums/core.enums'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  isAuth = false

  me() {
    this.http.get<MeResponse>(`${environmentNetwork.baseUrl}/auth/me`).subscribe(res => {
      if (res.resultCode === ResultCode.Success) this.isAuth = true
    })
  }
}
