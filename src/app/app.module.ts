import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { environment } from 'src/environments/environment'
import { EnvironmentBannerModule } from '../app/environment-banner/environment-banner.module'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CoreModule } from './core/core.module'
import { LayoutModule } from './layout/layout.module'
import { BidiModule } from '@angular/cdk/bidi'
import { PseudoModule } from 'src/locale/i18n.pseudo.component'
import { TitleService } from './core/title-service/title.service'
import { HttpContentTypeHeaderInterceptor } from './core/http-content-type-header-interceptor/http-content-type-header-interceptor'
import { HTTP_INTERCEPTORS } from '@angular/common/http'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    LayoutModule,
    BidiModule,
    PseudoModule, // Remove on angular 10 https://bit.ly/3ezbF4v
    // Environmental dependent modules
    environment.SHOW_TEST_WARNING_BANNER ? EnvironmentBannerModule : [],
  ],
  providers: [
    TitleService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpContentTypeHeaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    this.initializeApp()
  }

  private initializeApp() {
    environment.API_WEB = environment.API_WEB.replace(
      '<SUBDOMAIN>',
      this.getSubDomain()
    )
    environment.BASE_URL = environment.BASE_URL.replace(
      '<SUBDOMAIN>',
      this.getSubDomain()
    )
    environment.API_PUB = environment.API_PUB.replace(
      '<SUBDOMAIN>',
      this.getSubDomain()
    )
    environment.API_WEB = environment.API_WEB.replace(
      '<DOMAIN>',
      this.getCurrentLeanDomain()
    )
    environment.BASE_URL = environment.BASE_URL.replace(
      '<DOMAIN>',
      this.getCurrentLeanDomain()
    )
    environment.API_PUB = environment.API_PUB.replace(
      '<DOMAIN>',
      this.getCurrentLeanDomain()
    )
  }

  getCurrentLeanDomain() {
    const port = window.location.port ? ':' + window.location.port : ''
    return window.location.hostname.split('.').slice(-2).join('.') + port
  }

  getSubDomain() {
    const subdomain = window.location.hostname.split('.').slice(0, -2).join('.')
    return subdomain ? subdomain + '.' : ''
  }
}
