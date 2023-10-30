import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FormAntiRobotsComponent } from './form-anti-robots.component'
import { WINDOW_PROVIDERS } from '../../../cdk/window'
import { RegisterService } from '../../../core/register/register.service'
import { PlatformInfoService } from '../../../cdk/platform-info'
import { ErrorHandlerService } from '../../../core/error-handler/error-handler.service'
import { SnackbarService } from '../../../cdk/snackbar/snackbar.service'
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar'
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog'
import { Overlay } from '@angular/cdk/overlay'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { ErrorStateMatcher } from '@angular/material/core'

describe('FormAntiRobotsComponent', () => {
  let component: FormAntiRobotsComponent
  let fixture: ComponentFixture<FormAntiRobotsComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [FormAntiRobotsComponent],
      providers: [
        WINDOW_PROVIDERS,
        RegisterService,
        ErrorStateMatcher,
        PlatformInfoService,
        ErrorHandlerService,
        SnackbarService,
        MatSnackBar,
        MatDialog,
        Overlay,
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAntiRobotsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
