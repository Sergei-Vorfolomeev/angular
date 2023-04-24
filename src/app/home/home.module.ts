import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from 'src/app/home/home.component'
import { HomeRoutingModule } from 'src/app/home/home-routing.module'

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
