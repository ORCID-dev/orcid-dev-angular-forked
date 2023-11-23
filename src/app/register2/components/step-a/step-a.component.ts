import { Component, Input } from '@angular/core'

import { Router } from '@angular/router'
import { first } from 'rxjs/operators'
import { PlatformInfoService } from 'src/app/cdk/platform-info'
import { ApplicationRoutes } from 'src/app/constants'
import { environment } from 'src/environments/environment'
import { ReactivationLocal } from '../../../types/reactivation.local'
import { BaseStepDirective } from '../BaseStep'

@Component({
  selector: 'app-step-a',
  templateUrl: './step-a.component.html',
  styleUrls: ['./step-a.component.scss', '../register2.style.scss', '../register2.scss-theme.scss'],
  preserveWhitespaces: true,
})
export class StepAComponent extends BaseStepDirective {
  @Input() reactivation: ReactivationLocal

  constructor(private _platform: PlatformInfoService, private _router: Router) {
    super()
  }
  infoSiteBaseUrl = environment.INFO_SITE

  goBack() {
    this._platform
      .get()
      .pipe(first())
      .subscribe((platform) => {
        if (platform.social) {
          this._router.navigate([ApplicationRoutes.social], {
            queryParams: {
              ...platform.queryParameters,
            },
          })
        } else if (platform.institutional) {
          this._router.navigate([ApplicationRoutes.institutionalLinking], {
            queryParams: {
              ...platform.queryParameters,
            },
          })
        } else {
          this._router.navigate([ApplicationRoutes.signin], {
            queryParams: {
              ...platform.queryParameters,
            },
          })
        }
      })
  }

  nextButton2 () {
    console.log(( this.formGroup.controls.personal as any).controls)
    this.formGroup.controls.personal.markAllAsTouched()
  }

  signIn() {
    this._platform
      .get()
      .pipe(first())
      .subscribe((platform) => {
        const params = JSON.parse(JSON.stringify(platform.queryParameters))
        if (params['email']) {
          delete params['email']
        }
        if (params['orcid']) {
          delete params['orcid']
        }

        if (params['show_login']) {
          delete params['show_login']
        }

        this._router.navigate([ApplicationRoutes.signin], {
          queryParams: {
            ...params,
          },
        })
      })
  }
}
