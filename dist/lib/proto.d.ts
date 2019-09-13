import { PassportGenerator } from './passport/PassportGenerator';
import { PassportOwnership } from './passport/PassportOwnership';
import { FactReader, IPrivateDataHashes } from './passport/FactReader';
import { FactWriter } from './passport/FactWriter';
import { FactRemover } from './passport/FactRemover';
import { Permissions } from './passport/Permissions';
import { PassportReader } from './passport/PassportReader';
import { PrivateFactReader } from './passport/PrivateFactReader';
import { PrivateFactWriter } from './passport/PrivateFactWriter';
import { FactHistoryReader, IFactValue } from './passport/FactHistoryReader';
import { EventType, DataType, IHistoryEvent } from './models/IHistoryEvent';
import { IIPFSClient, IIPFSAddResult, IIPFSDag, IIPFSLink, IIPLD } from './models/IIPFSClient';
import { IPassportRef } from './models/IPassportRef';
import { IEthOptions } from './models/IEthOptions';
import { PrivateDataExchanger, ExchangeState, IProposeDataExchangeResult, IDisputeDataExchangeResult, IDataExchangeStatus, CurrentTimeGetter } from './passport/PrivateDataExchanger';
import { TxExecutor } from './models/TxExecutor';
import { ErrorCode } from './errors/ErrorCode';
import { ISdkError } from './errors/SdkError';
import * as quorum from './extensions/quorum';
import { Address } from './models/Address';
import { toBN } from './utils/conversion';
import { RandomArrayGenerator } from './models/RandomArrayGenerator';
declare const ext: {
    quorum: typeof quorum;
};
declare const _default: {
    PassportGenerator: typeof PassportGenerator;
    PassportOwnership: typeof PassportOwnership;
    PassportReader: typeof PassportReader;
    FactReader: typeof FactReader;
    FactWriter: typeof FactWriter;
    FactRemover: typeof FactRemover;
    PrivateFactReader: typeof PrivateFactReader;
    PrivateFactWriter: typeof PrivateFactWriter;
    Permissions: typeof Permissions;
    FactHistoryReader: typeof FactHistoryReader;
    EventType: typeof EventType;
    DataType: typeof DataType;
    PrivateDataExchanger: typeof PrivateDataExchanger;
    ErrorCode: typeof ErrorCode;
    ExchangeState: typeof ExchangeState;
    ext: {
        quorum: typeof quorum;
    };
    toBN: typeof toBN;
};
export default _default;
export { PassportGenerator, PassportOwnership, PassportReader, FactReader, FactWriter, FactRemover, PrivateFactReader, PrivateFactWriter, Permissions, FactHistoryReader, PrivateDataExchanger, EventType, DataType, IHistoryEvent, IIPFSClient, IIPFSAddResult, IFactValue, IPassportRef, IIPFSDag, IIPFSLink, IIPLD, IProposeDataExchangeResult, IDisputeDataExchangeResult, IDataExchangeStatus, IPrivateDataHashes, CurrentTimeGetter, TxExecutor, ErrorCode, ISdkError, IEthOptions, Address, ExchangeState, ext, toBN, RandomArrayGenerator, };
