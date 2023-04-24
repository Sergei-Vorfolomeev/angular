import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthService } from 'src/app/core/services/auth.service'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { HttpOptionsInterceptor } from 'src/app/core/interceptors/http-options.interceptor'

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpOptionsInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
