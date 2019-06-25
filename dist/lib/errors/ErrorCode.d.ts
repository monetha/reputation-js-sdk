export declare enum ErrorCode {
    MissingExchangeIdxInReceipt = "MissingExchangeIdxInReceipt",
    MissingSuccessfulInReceipt = "MissingSuccessfulInReceipt",
    MissingCheaterInReceipt = "MissingCheaterInReceipt",
    StatusMustBeProposed = "StatusMustBeProposed",
    StatusMustBeAccepted = "StatusMustBeAccepted",
    StatusMustBeAcceptedOrClosed = "StatusMustBeAcceptedOrClosed",
    ExchangeExpiredOrExpireSoon = "ExchangeExpiredOrExpireSoon",
    PassOwnerCanCloseOnlyAfterExpiration = "PassOwnerCanCloseOnlyAfterExpiration",
    OnlyExchangeParticipantsCanClose = "OnlyExchangeParticipantsCanClose",
    InvalidExchangeKeyHash = "CannotDecryptExchangeKey",
    InvalidExchangeKey = "InvalidExchangeKey",
    InvalidDecryptedSecretDataKey = "InvalidDecryptedSecretDataKey",
    InvalidPassportOwnerKey = "InvalidPassportOwnerKey",
    CanOnlyCloseAfterExpiration = "CanOnlyCloseAfterExpiration"
}
