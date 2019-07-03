import { IRawTX } from 'lib/models/IRawTX';
import { TxExecutor } from 'lib/proto';
import { toBN } from 'lib/utils/conversion';
import Web3 from 'web3';
import { Transaction, TransactionReceipt } from 'web3-core';

export async function submitTransaction(web3: Web3, txData: IRawTX) {
  return new Promise<Transaction>(async (success, reject) => {
    try {
      await web3.eth.sendTransaction({
        from: txData.from,
        to: txData.to,
        nonce: Number(txData.nonce),
        gasPrice: txData.gasPrice,
        gas: txData.gasLimit,
        value: toBN(txData.value),
        data: txData.data,
      })
        .on('transactionHash', async (hash) => {
          const transaction = await web3.eth.getTransaction(hash);
          success(transaction);
        });
    } catch (e) {
      reject(e);
    }
  });
}

/**
 * waitForTxToFinish waits for transaction to finish for the given txHash,
 * returns a promise which is resolved when transaction finishes.
 * @param {string} txHash a string with transaction hash as value
 */
const waitForTxToFinish = (web3: Web3, txHash: string): Promise<TransactionReceipt> =>
  new Promise((resolve, reject) => {

    const waiter = async () => {
      try {
        const result = await web3.eth.getTransactionReceipt(txHash);

        if (result) {
          if (!result.status) {
            console.error(result);
            throw new Error('Transaction has failed');
          }

          resolve(result);
          return;
        }
      } catch (err) {
        reject(err);
        return;
      }

      setTimeout(waiter, 100);
    };

    waiter();
  });

export const createTxExecutor = (web3: Web3): TxExecutor => {
  return async (txData: IRawTX) => {
    const tx = await submitTransaction(web3, txData);

    return waitForTxToFinish(web3, tx.hash);
  };
};
