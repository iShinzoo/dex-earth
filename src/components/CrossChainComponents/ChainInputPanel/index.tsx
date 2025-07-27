import React from 'react';
import Dwn from '../../../assets/images/arrow2.png';
import ChainSearchModal from './ChainSearchModal';

// import * as Uniswap from './Uniswap.json';
import styled from 'styled-components';
import { Chain } from '../CCHooks/types';
interface Token {
  chainId: number;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoURI: string;
  extensions: {
    bridgeInfo: {
      [key: string]: {
        tokenAddress: string;
      };
    };
  };
}

interface ChainInputPanelProps {
  isOpen: boolean;
  setModalOpen: (bool: boolean) => void;
  selectedChain: Chain;
  otherSelectedChain: Chain;
  setChain: (chain: Chain) => void;
}

const StyledImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 30%;
  margin-right: 5px;
  background: white;
`;

export default function ChainInputPanel({
  isOpen,
  setModalOpen,
  selectedChain,
  otherSelectedChain,
  setChain,
}: ChainInputPanelProps) {
  return (
    <>
      <DropDown className="ExBox-right">
        <div onClick={() => setModalOpen(true)} className="selectBtn">
          <StyledImage src={selectedChain?.logoURI} alt="img" />
          <span>
            Chain
            <b style={{ color: 'black' }}>{selectedChain ? (selectedChain?.name).slice(0, 8) : 'Select'}</b>
          </span>
          <img className="arrow" src={Dwn} alt="img" />
        </div>
      </DropDown>

      <ChainSearchModal
        isOpen={isOpen}
        onDismiss={setModalOpen}
        selectedChain={selectedChain}
        otherSelectedChain={otherSelectedChain}
        setChain={setChain}
      />
    </>
  );
}

const DropDown = styled.div`
  width: 100%;
  flex-shrink: 0;
  align-self: center;
  margin-right: 0;
  margin-left: auto;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  padding: 0 14px;
  &:hover {
    border: 1px solid var(--primary);
  }
  .selectBtn {
    display: flex;
    align-items: center;
    font-size: 16px;
    margin-bottom: 2px;
    width: 100%;
    border-radius: 30px;
    padding: 0 0 0 0;
    height: 19px;
    width: 100%;
    height: 50px;
    .token {
      margin-right: 6px;
      width: 18px;
      height: 18px;
    }
    span {
      margin: 0 0 0 0;
      display: flex;
      flex-direction: column;
      font-size: 15px;
      b {
        font-size: 16px;
        font-weight: 500;
      }
    }
    .arrow {
      margin-left: auto;
      width: 11px;
      flex-shrink: 0;
      position: relative;
    }
  }
`;
