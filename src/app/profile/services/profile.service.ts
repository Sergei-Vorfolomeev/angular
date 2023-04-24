import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environmentNetwork } from 'src/environments/environment'
import { ProfileResponse } from 'src/app/core/models/profile.model'

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfile(userId: number): Observable<ProfileResponse> {
    return this.http.get<ProfileResponse>(`${environmentNetwork.baseUrl}/profile/${userId}`)
  }
}
