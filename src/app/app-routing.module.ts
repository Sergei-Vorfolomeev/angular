import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from 'src/app/home/home.component'
import { LoginComponent } from 'src/app/login/login.component'
import { TodosComponent } from 'src/app/todos/todos.component'
import { UsersComponent } from 'src/app/users/users.component'
import { ProfileComponent } from 'src/app/profile/profile.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'users', component: UsersComponent },
  { path: 'profile', component: ProfileComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
