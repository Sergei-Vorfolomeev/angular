import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProfileComponent } from 'src/app/profile/components/profile.component'
import { AuthGuard } from 'src/app/guards/auth.guard'

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
