import { Currency, Token } from '@bidelity/sdk';
import React, { useCallback, useEffect, useState } from 'react';
import useLast from '../../../hooks/useLast';
import Modal from '../../Modal';
import { CurrencySearch } from '../../CrossChainComponents/CurrencySearch';
// import { ImportToken } from './ImportToken';
// import Manage from './Manage';
// import { ImportList } from './ImportList';

interface CurrencySearchModalProps {
  isOpen: boolean;
  onDismiss: () => void;
  selectedCurrency?: Currency | null;
  onCurrencySelect: (currency: Currency) => void;
  otherSelectedCurrency?: Currency | null;
  showCommonBases?: boolean;
  chainId: number;
}

export enum CurrencyModalView {
  search,
  manage,
  importToken,
  importList,
}

export default function CurrencySearchModal({
  isOpen,
  onDismiss,
  onCurrencySelect,
  selectedCurrency,
  otherSelectedCurrency,
  showCommonBases = false,
  chainId,
}: CurrencySearchModalProps) {
  const [modalView, setModalView] = useState<CurrencyModalView>(CurrencyModalView.search);
  console.log(modalView);

  const lastOpen = useLast(isOpen);

  useEffect(() => {
    if (isOpen && !lastOpen) {
      setModalView(CurrencyModalView.search);
    }
  }, [isOpen, lastOpen]);

  const handleCurrencySelect = useCallback(
    (currency: Currency) => {
      onCurrencySelect(currency);
      onDismiss();
    },
    [onCurrencySelect, onDismiss]
  );

  // for token import view

  // used for import token flow
  const [importToken, setImportToken] = useState<Token | undefined>();
  console.log(importToken);

  // used for import list

  // change min height if not searching
  // const minHeight = modalView === CurrencyModalView.importToken || modalView === CurrencyModalView.importList ? 40 : 60;

  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} maxHeight={80} maxWidth={345}>
      {/* {modalView === CurrencyModalView.search && ( */}
      <CurrencySearch
        isOpen={isOpen}
        onDismiss={onDismiss}
        onCurrencySelect={handleCurrencySelect}
        selectedCurrency={selectedCurrency}
        otherSelectedCurrency={otherSelectedCurrency}
        showCommonBases={showCommonBases}
        showImportView={() => setModalView(CurrencyModalView.importToken)}
        setImportToken={setImportToken}
        showManageView={() => setModalView(CurrencyModalView.manage)}
        chainId={chainId}
      />
      {/* )} */}
      {/* {modalView === CurrencyModalView.importToken && importToken && (
        <ImportToken
          tokens={[importToken]}
          onDismiss={onDismiss}
          onBack={() =>
            setModalView(prevView && prevView !== CurrencyModalView.importToken ? prevView : CurrencyModalView.search)
          }
          handleCurrencySelect={handleCurrencySelect}
        />
      )} */}
      {/* {modalView === CurrencyModalView.importList && importList && listURL && (
        <ImportList list={importList} listURL={listURL} onDismiss={onDismiss} setModalView={setModalView} />
      )} */}
      {/* {modalView === CurrencyModalView.manage && (
        <Manage
          onDismiss={onDismiss}
          setModalView={setModalView}
          setImportToken={setImportToken}
          setImportList={setImportList}
          setListUrl={setListUrl}
        />
      )} */}
    </Modal>
  );
}
