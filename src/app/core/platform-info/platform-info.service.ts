import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Platform } from '@angular/cdk/platform'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { PlatformInfo } from 'src/app/types/platform-info.local'

@Injectable({
  providedIn: 'root',
})
export class PlatformInfoService {
  platformSubject = new BehaviorSubject<PlatformInfo>(null)

  platform: PlatformInfo = {
    desktop: false,
    tabletOrHandset: false,
    tablet: false,
    handset: false,
    edge: false,
    ie: false,
    firefox: false,
    safary: false,
  }

  constructor(
    private _breakpointObserver: BreakpointObserver,
    private _platform: Platform
  ) {
    this.platform.firefox = _platform.FIREFOX
    this.platform.safary = _platform.SAFARI
    this.platform.ie = _platform.TRIDENT
    this.platform.edge = _platform.EDGE
    this.platformSubject.next(this.platform)

    this._breakpointObserver.observe([Breakpoints.Handset]).subscribe(state => {
      if (state.matches) {
        this.platform.handset = true
      } else {
        this.platform.handset = false
      }
      this.platformSubject.next(this.platform)
    })
    this._breakpointObserver.observe([Breakpoints.Tablet]).subscribe(state => {
      if (state.matches) {
        this.platform.tablet = true
      } else {
        this.platform.tablet = false
      }
      this.platformSubject.next(this.platform)
    })
    this._breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe(state => {
        if (state.matches) {
          this.platform.tabletOrHandset = true
          this.platform.desktop = false
        } else {
          this.platform.tabletOrHandset = false
          this.platform.desktop = true
        }
        this.platformSubject.next(this.platform)
      })
  }

  public get(): Observable<PlatformInfo> {
    return this.platformSubject.asObservable()
  }
}
