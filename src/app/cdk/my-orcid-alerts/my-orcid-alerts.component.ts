import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-my-orcid-alerts',
  templateUrl: './my-orcid-alerts.component.html',
  styleUrls: [
    './my-orcid-alerts.component.scss',
    './my-orcid-alerts.component.scss-theme.scss',
  ],
})
export class MyOrcidAlertsComponent implements OnInit {
  @Input() emailVerified: boolean
  @Input() invalidVerifyUrl: boolean
  @Input() signInUpdatesV1Togglz: boolean
  @Input() printError: boolean
  @Input() badCredentials: boolean

  constructor() {}

  ngOnInit(): void {}
}
