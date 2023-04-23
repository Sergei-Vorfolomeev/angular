import { Injectable } from '@angular/core'
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { environmentNetwork } from 'src/environments/environment'

@Injectable()
export class HttpOptionsInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      withCredentials: true,
      headers: new HttpHeaders().append('api-key', environmentNetwork.apiKey),
    })
    return next.handle(request)
  }
}
