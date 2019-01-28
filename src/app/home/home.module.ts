import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatProgressSpinnerModule,
  MatRippleModule,
} from '@angular/material'
import { CoreModule } from 'src/app/core/core.module'

import { NewsComponent } from './components/news/news.component'
import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './pages/home/home.component'

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    CoreModule,
    MatRippleModule,
    MatProgressSpinnerModule,
  ],
  declarations: [HomeComponent, NewsComponent],
})
export class HomeModule {}
