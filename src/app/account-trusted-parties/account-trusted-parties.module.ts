import { TextFieldModule } from '@angular/cdk/text-field'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button'
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox'
import { MatLegacyOptionModule as MatOptionModule } from '@angular/material/legacy-core'
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog'
import { MatDividerModule } from '@angular/material/divider'
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input'
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu'
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar'
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio'
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select'
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table'
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip'

import { AccountPanelModule } from '../cdk/account-panel/account-panel.module'
import { ModalModule } from '../cdk/modal/modal.module'
import { SideBarModule } from '../cdk/side-bar/side-bar.module'
import { TopBarMyPublicRecordPreviewModule } from '../cdk/top-bar-my-public-record-preview/top-bar-my-public-record-preview.module'
import { TwoFactorAuthenticationFormModule } from '../cdk/two-factor-authentication-form/two-factor-authentication-form.module'
import { VerificationEmailModalService } from '../core/verification-email-modal/verification-email-modal.service'
import { SharedModule } from '../shared/shared.module'
import { AccountTrustedPartiesRoutingModule } from './account-trusted-parties-routing.module'
import { DialogAddTrustedIndividualsYourOwnEmailComponent } from './components/dialog-add-trusted-individuals-your-own-email/dialog-add-trusted-individuals-your-own-email.component'
import { DialogAddTrustedIndividualsComponent } from './components/dialog-add-trusted-individuals/dialog-add-trusted-individuals.component'
import { DialogRevokeTrustedIndividualsComponent } from './components/dialog-revoke-trusted-individuals/dialog-revoke-trusted-individuals.component'
import { DialogRevokeTrustedOrganizationComponent } from './components/dialog-revoke-trusted-organization/dialog-revoke-trusted-organization.component'
import { SettingsTrustedIndividualsSearchComponent } from './components/settings-trusted-individuals-search/settings-trusted-individuals-search.component'
import { SettingsTrustedIndividualsComponent } from './components/settings-trusted-individuals/settings-trusted-individuals.component'
import { SettingsTrustedOrganizationComponent } from './components/settings-trusted-organization/settings-trusted-organization.component'
import { SettingsTrustedOrganizationsComponent } from './components/settings-trusted-organizations/settings-trusted-organizations.component'
import { SettingsUsersThatThrustYouComponent } from './components/settings-users-that-thrust-you/settings-users-that-thrust-you.component'
import { SettingsComponent } from './components/settings/settings.component'
import { AccountTrustedPartiesComponent } from './pages/account-trusted-parties/account-trusted-parties.component'

@NgModule({
  declarations: [
    AccountTrustedPartiesComponent,
    SettingsComponent,
    AccountTrustedPartiesComponent,
    SettingsTrustedOrganizationsComponent,
    SettingsTrustedOrganizationComponent,
    DialogRevokeTrustedOrganizationComponent,
    SettingsTrustedIndividualsComponent,
    DialogRevokeTrustedIndividualsComponent,
    SettingsTrustedIndividualsSearchComponent,
    DialogAddTrustedIndividualsComponent,
    SettingsUsersThatThrustYouComponent,
    DialogAddTrustedIndividualsYourOwnEmailComponent,
  ],
  imports: [
    CommonModule,
    AccountTrustedPartiesRoutingModule,
    SideBarModule,
    MatDialogModule,
    MatProgressBarModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    SharedModule,
    MatMenuModule,
    MatRadioModule,
    MatTableModule,
    ModalModule,
    MatDividerModule,
    TextFieldModule,
    TwoFactorAuthenticationFormModule,
    AccountPanelModule,
    TopBarMyPublicRecordPreviewModule,
    MatTooltipModule,
  ],
  providers: [VerificationEmailModalService],
})
export class AccountTrustedPartiesModule {}
