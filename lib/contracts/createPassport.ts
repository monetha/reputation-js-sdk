import createInstance from '../providers/createInstance';
import performAsync from '../providers/performAsync';
import loader from '../providers/loader';


interface IReturn {
  "res": string;
  "err": any;
}

export class CreatePassport {
  contract: any;

  constructor(abi: any, atAddress: string) {
    this.contract = createInstance(abi, atAddress);
  }

  async generateEmptyPassport(): Promise<IReturn> {
    let trxHash: any;
    let result: IReturn = {"res": null, "err": null};
    try {
      trxHash = await performAsync(this.contract.createPassport.bind(null));
    } catch (err) {
      return err;
    }

    const txResult = await loader(trxHash);
    if(txResult.err) {
      result.err = txResult.err;
    } else {
      result.res = txResult.res.logs[0].topics[1];
      result.res = '0x' + result.res.slice(26);
    }

    return result;    
  }
}

export default CreatePassport;
