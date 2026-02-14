const algosdk = require('algosdk');
require('dotenv').config();

const algodClient = new algosdk.Algodv2(
  { 'X-API-Key': process.env.ALGOD_TOKEN || '' },
  process.env.ALGOD_SERVER,
  process.env.ALGOD_PORT || ''
);

const serviceAccount = algosdk.mnemonicToSecretKey(process.env.ALGORAND_MNEMONIC);

async function recordOnChain(executionHash) {
  const params = await algodClient.getTransactionParams().do();
  const note = new TextEncoder().encode(`AlgoZap Proof: ${executionHash}`);
  const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    from: serviceAccount.addr,
    to: serviceAccount.addr,
    amount: 0,
    note,
    suggestedParams: params
  });
  const signedTxn = txn.signTxn(serviceAccount.sk);
  const { txId } = await algodClient.sendRawTransaction(signedTxn).do();
  console.log('✅ Execution hash stored on Algorand:', txId);
  return txId;
}

module.exports = { recordOnChain };
