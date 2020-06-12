export interface RequestInfoForm {
  errors: any[]
  scopes: Scope[]
  clientDescription: string
  clientId: string
  clientName: string
  clientEmailRequestReason: string
  memberName: string
  redirectUrl: string
  responseType: string
  stateParam: string
  userId?: any
  userName?: any
  userOrcid: string
  userEmail: string
  userGivenNames: string
  userFamilyNames: string
  nonce: string
  clientHavePersistentTokens: boolean
  scopesAsString: string
}

export interface Scope {
  name: string
  value: string
  description: string
  longDescription: string
}
