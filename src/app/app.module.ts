import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { PageNotFoundComponent } from 'src/app/page-not-found/components/page-not-found.component'
import { AuthModule } from 'src/app/auth/auth.module'
import { SharedModule } from 'src/app/shared/shared.module'
import { TodosModule } from 'src/app/todos/todos.module'
import { UsersModule } from 'src/app/users/users.module'
import { ProfileModule } from 'src/app/profile/profile.module'
import { HomeModule } from 'src/app/home/home.module'
import { CoreModule } from 'src/app/core/core.module'

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    TodosModule,
    UsersModule,
    ProfileModule,
    HomeModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
