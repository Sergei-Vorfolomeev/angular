import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PageNotFoundComponent } from 'src/app/page-not-found/components/page-not-found.component'

const routes: Routes = [
  { path: '', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageNotFoundRoutingModule {}
