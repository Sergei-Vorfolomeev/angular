import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from 'src/app/home/home.component'
import { LoginComponent } from 'src/app/login/login.component'
import { TodosComponent } from 'src/app/todos/todos.component'
import { UsersComponent } from 'src/app/users/users.component'
import { ProfileComponent } from 'src/app/profile/profile.component'
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component'
import { AuthGuard } from 'src/app/guards/auth.guard'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'todos', component: TodosComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'profile/:userId', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
