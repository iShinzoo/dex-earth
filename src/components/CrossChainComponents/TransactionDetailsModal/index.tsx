import React from 'react';
import TransactionModal from './TransactionModal';

interface ChainInputPanelProps {
  isOpen: boolean;
  setModalOpen: (bool: boolean) => void;
}

export default function TransactionDetailsModal({ isOpen, setModalOpen }: ChainInputPanelProps) {
  return (
    <>
      <TransactionModal isOpen={isOpen} onDismiss={setModalOpen} />
    </>
  );
}
