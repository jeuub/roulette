import React from 'react';
import {Modal} from "../../Modal/Modal";
import {IModal} from "../../../interfaces/modal/IModal";
import { $t } from '../../../lib/i18n';
import {useSelector} from "react-redux";
import {currencyValueChanger} from "../../../lib/numberRefractor";
import {getTicker} from "../../../lib/tickers";

export const GameBetModal = ({
  type,
  formState,
  onClose
}: IModal) => {

  const handleShow = (value: boolean) => {
    onClose(value)
  }

  const currency = useSelector((state: any) => state.balanceReducer.currency);
  const rate = useSelector((state: any) => state.balanceReducer.rate)

  const proofLine = `${formState.hiddenNumber}${formState.salt}`;

  let buttons: any = [
    {
      value: true,
      text: 'Start new game',
      primary: true
    },
    {
      value: false,
      text: 'Check it',
      light: true,
      defaultLink: true,
      href: `https://md5calc.com/hash/sha256/${proofLine}`,
      target: '_blank'
    }
  ]

  if (formState.reopen) {
    buttons = [
      {
        value: false,
        text: 'Close',
        primary: true,
      },
      {
        value: false,
        text: 'Check it',
        light: true,
        defaultLink: true,
        href: `https://md5calc.com/hash/sha256/${proofLine}`,
        target: '_blank'
      }
    ]
  }

  return (
    <Modal
      className={formState.userWin ? 'success' : 'danger'}
      title={formState.userWin ? 'You won!' : 'You lose'}
      onResolve={handleShow}
      buttons={buttons}
    >
      <>
        <div className="status-modal__item">
          <div className="status-modal__item_title">
            {$t('Game number')}
          </div>
          <div className="status-modal__item_value">
            {$t(`${formState.game || formState.gameNumber}`)}
          </div>
        </div>
        <div className="status-modal__item">
          <div className="status-modal__item_title">
            {$t('Your bet')}
          </div>
          <div className="status-modal__item_value">
            {$t(`${currencyValueChanger(currency, rate, formState.bet)} ${getTicker(currency)}`)}
          </div>
        </div>
        {type === 'dice-game' ?
          <div className="status-modal__item">
            <div className="status-modal__item_title">
              {$t('Your number')}
            </div>
            <div className="status-modal__item_value">
              {$t(formState.ownNumber || formState.own)}
            </div>
          </div> : null
        }
        <div className="status-modal__item">
          <div className="status-modal__item_title">
            {$t('Generated number')}
          </div>
          <div className="status-modal__item_value">
            {$t(formState.hiddenNumber)}
          </div>
        </div>
        <div className="status-modal__item">
          <div className="status-modal__item_title">
            {formState.userWin ?
              $t('Total win') :
              $t('Total loss')
            }
          </div>
          <div className="status-modal__item_value">
            {$t(`${currencyValueChanger(currency, rate, formState.gain, {absolute: true})} ${getTicker(currency)}`)}
          </div>
        </div>
        <div className="status-modal__divider" />
        <div className="status-modal__info text-secondary">
          {$t('Game hash = generated number + salt. You can check it with sha256 decoder.')}
        </div>
        <div className="status-modal__item small">
          <div className="status-modal__item_info">
            {$t(`Salt - ${formState.salt}`)}
          </div>
        </div>
        <div className="status-modal__item small">
          <div className="status-modal__item_info">
            {$t(`Hash - ${formState.lastHash || formState.hash}`)}
          </div>
        </div>
        <div className="status-modal__item small">
          <div className="status-modal__item_info">
            {$t(`Proof - ${proofLine}`)}
          </div>
        </div>
      </>
    </Modal>
  )
}