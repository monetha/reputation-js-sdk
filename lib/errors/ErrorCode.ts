export enum ErrorCode {
  MissingSenderPublicKey = 'MissingSenderPublicKey',
  MissingExchangeIdxInReceipt = 'MissingExchangeIdxInReceipt',
  MissingSuccessfulInReceipt = 'MissingSuccessfulInReceipt',
  MissingCheaterInReceipt = 'MissingCheaterInReceipt',
  StatusMustBeProposed = 'StatusMustBeProposed',
  StatusMustBeAccepted = 'StatusMustBeAccepted',
  StatusMustBeAcceptedOrClosed = 'StatusMustBeAcceptedOrClosed',
  ExchangeExpiredOrExpireSoon = 'ExchangeExpiredOrExpireSoon',
  ExchangeNotFound = 'ExchangeNotFound',
  PassOwnerCanCloseOnlyAfterExpiration = 'PassOwnerCanCloseOnlyAfterExpiration',
  OnlyExchangeParticipantsCanClose = 'OnlyExchangeParticipantsCanClose',
  InvalidExchangeKeyHash = 'CannotDecryptExchangeKey',
  InvalidExchangeKey = 'InvalidExchangeKey',
  InvalidDecryptedSecretDataKey = 'InvalidDecryptedSecretDataKey',
  InvalidPassportOwnerKey = 'InvalidPassportOwnerKey',
  CanOnlyCloseAfterExpiration = 'CanOnlyCloseAfterExpiration',
  OwnershipNotClaimed = 'OwnershipNotClaimed',
  FailedToGetOwnershipEvent = 'FailedToGetOwnershipEvent',
  MethodSignatureInvalid = 'MethodSignatureInvalid',
  InvalidIPFSObject = 'InvalidIPFSObject',
  DataNotFoundInBlock = 'DataNotFoundInBlock',
  TxNotFound = 'TxNotFound',
}
