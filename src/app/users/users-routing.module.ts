import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UsersComponent } from 'src/app/users/components/users.component'
import { AuthGuard } from 'src/app/guards/auth.guard'

const routes: Routes = [{ path: '', component: UsersComponent, canActivate: [AuthGuard] }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
