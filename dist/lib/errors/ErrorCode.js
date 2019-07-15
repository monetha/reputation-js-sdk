"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["MissingExchangeIdxInReceipt"] = "MissingExchangeIdxInReceipt";
    ErrorCode["MissingSuccessfulInReceipt"] = "MissingSuccessfulInReceipt";
    ErrorCode["MissingCheaterInReceipt"] = "MissingCheaterInReceipt";
    ErrorCode["StatusMustBeProposed"] = "StatusMustBeProposed";
    ErrorCode["StatusMustBeAccepted"] = "StatusMustBeAccepted";
    ErrorCode["StatusMustBeAcceptedOrClosed"] = "StatusMustBeAcceptedOrClosed";
    ErrorCode["ExchangeExpiredOrExpireSoon"] = "ExchangeExpiredOrExpireSoon";
    ErrorCode["PassOwnerCanCloseOnlyAfterExpiration"] = "PassOwnerCanCloseOnlyAfterExpiration";
    ErrorCode["OnlyExchangeParticipantsCanClose"] = "OnlyExchangeParticipantsCanClose";
    ErrorCode["InvalidExchangeKeyHash"] = "CannotDecryptExchangeKey";
    ErrorCode["InvalidExchangeKey"] = "InvalidExchangeKey";
    ErrorCode["InvalidDecryptedSecretDataKey"] = "InvalidDecryptedSecretDataKey";
    ErrorCode["InvalidPassportOwnerKey"] = "InvalidPassportOwnerKey";
    ErrorCode["CanOnlyCloseAfterExpiration"] = "CanOnlyCloseAfterExpiration";
    ErrorCode["OwnershipNotClaimed"] = "OwnershipNotClaimed";
    ErrorCode["FailedToGetOwnershipEvent"] = "FailedToGetOwnershipEvent";
    ErrorCode["MethodSignatureInvalid"] = "MethodSignatureInvalid";
    ErrorCode["InvalidIPFSObject"] = "InvalidIPFSObject";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
