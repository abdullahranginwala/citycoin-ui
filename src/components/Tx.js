import { hexToCV } from '@stacks/transactions';
import React from 'react';
import { Amount } from './Amount';
export function Tx({ tx }) {
  const apiData = tx.apiData;
  const txId = apiData.tx_id;
  const copyToClipboard = () => {
    navigator.clipboard.writeText(txId);
  };
  const openTxInExplorer = () => {
    window.open(`https://explorer.stacks.co/txid/${txId}`, '_blank');
  };
  const openTx = () => {
    window.location.href = `/txid/${txId}`;
  };

  const txEvents =
    tx &&
    tx.apiData &&
    tx.apiData.events.filter(event => {
      return event.event_type === 'stx_asset';
    });
  console.log(tx.apiData);
  const total = txEvents.reduce((sum, e) => sum + e.asset.amount, 0);
  return (
    <div className="small">
      {txId.substr(0, 7)}...{txId.substr(58)}
      {total}
      <i className="p-1 bi bi-clipboard" title="copy" onClick={copyToClipboard}></i>
      <i className="p-1 bi bi-link" title="Details" onClick={openTx}></i>
      <i className="p-1 bi bi-link-45deg" title="Explorer" onClick={openTxInExplorer}></i>
      {txEvents &&
        txEvents.map((event, key) => {
          const memo = hexToCV(
            tx.apiData.events[event.event_index + 1].contract_log.value.hex
          ).buffer.toString();
          return (
            <div key={key} className="container">
              <Amount ustx={event.asset.amount} />
              {memo && memo}
            </div>
          );
        })}
    </div>
  );
}
