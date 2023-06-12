export interface AccountTrustedOrganization {
  orcidUri: string
  orcidPath: string
  orcidHost: string
  name: string
  groupOrcidUri?: any
  groupOrcidPath: string
  groupOrcidHost?: any
  groupName: string
  websiteValue: string
  approvalDate: number
  scopePaths: { [key in ScopePathType]: string }
  tokenId: string
}

export enum ScopePathType {
  ACTIVITIES_READ_LIMITED = 'ACTIVITIES_READ_LIMITED',
  ACTIVITIES_UPDATE = 'ACTIVITIES_UPDATE',
  AFFILIATIONS_CREATE = 'AFFILIATIONS_CREATE',
  AFFILIATIONS_READ_LIMITED = 'AFFILIATIONS_READ_LIMITED',
  AFFILIATIONS_UPDATE = 'AFFILIATIONS_UPDATE',
  AUTHENTICATE = 'AUTHENTICATE',
  OPENID = 'OPENID',
  EMAIL_READ_PRIVATE = 'EMAIL_READ_PRIVATE',
  FUNDING_CREATE = 'FUNDING_CREATE',
  FUNDING_READ_LIMITED = 'FUNDING_READ_LIMITED',
  FUNDING_UPDATE = 'FUNDING_UPDATE',
  ORCID_BIO_EXTERNAL_IDENTIFIERS_CREATE = 'ORCID_BIO_EXTERNAL_IDENTIFIERS_CREATE',
  ORCID_BIO_READ_LIMITED = 'ORCID_BIO_READ_LIMITED',
  ORCID_BIO_UPDATE = 'ORCID_BIO_UPDATE',
  ORCID_GRANTS_CREATE = 'ORCID_GRANTS_CREATE',
  ORCID_GRANTS_READ_LIMITED = 'ORCID_GRANTS_READ_LIMITED',
  ORCID_PROFILE_CREATE = 'ORCID_PROFILE_CREATE',
  ORCID_PROFILE_READ_LIMITED = 'ORCID_PROFILE_READ_LIMITED',
  ORCID_WORKS_CREATE = 'ORCID_WORKS_CREATE',
  ORCID_WORKS_READ_LIMITED = 'ORCID_WORKS_READ_LIMITED',
  ORCID_WORKS_UPDATE = 'ORCID_WORKS_UPDATE',
  PEER_REVIEW_CREATE = 'PEER_REVIEW_CREATE',
  PEER_REVIEW_READ_LIMITED = 'PEER_REVIEW_READ_LIMITED',
  PEER_REVIEW_UPDATE = 'PEER_REVIEW_UPDATE',
  PERSON_READ_LIMITED = 'PERSON_READ_LIMITED',
  PERSON_UPDATE = 'PERSON_UPDATE',
  READ_LIMITED = 'READ_LIMITED',
  READ_PUBLIC = 'READ_PUBLIC',
  WEBHOOK = 'WEBHOOK',
}

export const ScopePathTypeLabel = {
  [ScopePathType.ACTIVITIES_READ_LIMITED]: $localize`:@@account.scopePathType.activitiesReadLimited:Read limited information from your research activities`,
  [ScopePathType.ACTIVITIES_UPDATE]: $localize`:@@account.scopePathType.activitiesUpdate:Add/update your research activities (works, affiliations, etc)`,
  [ScopePathType.AFFILIATIONS_CREATE]: $localize`:@@account.scopePathType.affiliationsCreate:Add education or employment`,
  [ScopePathType.AFFILIATIONS_READ_LIMITED]: $localize`:@@account.scopePathType.affiliationsReadLimited:Read limited info from your affiliations list`,
  [ScopePathType.AFFILIATIONS_UPDATE]: $localize`:@@account.scopePathType.affiliationsUpdate:Update your affiliations`,
  [ScopePathType.AUTHENTICATE]: $localize`:@@account.scopePathType.authenticate:Get your ORCID iD`,
  [ScopePathType.OPENID]: $localize`:@@account.scopePathType.openid:Get your ORCID iD`,
  [ScopePathType.EMAIL_READ_PRIVATE]: $localize`:@@account.scopePathType.openid:Get your ORCID iD`,
  [ScopePathType.FUNDING_CREATE]: $localize`:@@account.scopePathType.fundingCreate:Add funding items`,
  [ScopePathType.FUNDING_READ_LIMITED]: $localize`:@@account.scopePathType.fundingReadLimited:Read limited info from your funding list`,
  [ScopePathType.FUNDING_UPDATE]: $localize`:@@account.scopePathType.fundingUpdate:Update your funding items`,
  [ScopePathType.ORCID_BIO_EXTERNAL_IDENTIFIERS_CREATE]: $localize`:@@account.scopePathType.orcidBioExternalIdentifiersCreate:Add a person identifier`,
  [ScopePathType.ORCID_BIO_READ_LIMITED]: $localize`:@@account.scopePathType.orcidBioReadLimited:Read your biographical information`,
  [ScopePathType.ORCID_BIO_UPDATE]: $localize`:@@account.scopePathType.orcidBioUpdate:Add/update other information about you (country, keywords, etc.)`,
  [ScopePathType.ORCID_GRANTS_CREATE]: $localize`:@@account.scopePathType.orcidGrantsCreate:Add grants to your grants list`,
  [ScopePathType.ORCID_GRANTS_READ_LIMITED]: $localize`:@@account.scopePathType.orcidGrantsReadLimited:Read limited info from your grants list`,
  [ScopePathType.ORCID_PROFILE_CREATE]: $localize`:@@account.scopePathType.orcidProfileCreate:Create a new profile`,
  [ScopePathType.ORCID_PROFILE_READ_LIMITED]: $localize`:@@account.scopePathType.orcidProfileReadLimited:Read your information with visibility set to Trusted Parties`,
  [ScopePathType.ORCID_WORKS_CREATE]: $localize`:@@account.scopePathType.orcidWorksCreate:Add works`,
  [ScopePathType.ORCID_WORKS_READ_LIMITED]: $localize`:@@account.scopePathType.orcidWorksReadLimited:Read items in your ORCID record`,
  [ScopePathType.ORCID_WORKS_UPDATE]: $localize`:@@account.scopePathType.orcidWorksUpdate:Update your works`,
  [ScopePathType.PEER_REVIEW_CREATE]: $localize`:@@account.scopePathType.peerReviewCreate:Add peer reviews`,
  [ScopePathType.PEER_REVIEW_READ_LIMITED]: $localize`:@@account.scopePathType.peerReviewReadLimited:Read peer reviews from your ORCID record`,
  [ScopePathType.PEER_REVIEW_UPDATE]: $localize`:@@account.scopePathType.peerReviewUpdate:Update your peer reviews`,
  [ScopePathType.PERSON_READ_LIMITED]: $localize`:@@account.scopePathType.personReadLimited:Read limited information from your biography.`,
  [ScopePathType.PERSON_UPDATE]: $localize`:@@account.scopePathType.personUpdate:Add/update other information about you (country, keywords, etc.)`,
  [ScopePathType.READ_LIMITED]: $localize`:@@account.scopePathType.readLimited:Read your information with visibility set to Trusted Parties`,
  [ScopePathType.READ_PUBLIC]: $localize`:@@account.scopePathType.readPublic:Read public info only`,
  [ScopePathType.WEBHOOK]: $localize`:@@account.scopePathType.webhook:Notifies Application if there are changes to your record`,
}
