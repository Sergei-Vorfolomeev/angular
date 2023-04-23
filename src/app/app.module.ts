import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TodosComponent } from './todos/todos.component'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import { UsersComponent } from './users/users.component'
import { ProfileComponent } from './profile/profile.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { HttpOptionsInterceptor } from 'src/app/interceptors/http-options.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    LoginComponent,
    HomeComponent,
    UsersComponent,
    ProfileComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpOptionsInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
