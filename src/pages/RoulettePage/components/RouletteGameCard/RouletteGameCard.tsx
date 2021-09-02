import React from 'react';
import {$t} from "../../../../lib/i18n";
import {currencyValueChanger} from "../../../../lib/numberRefractor";
import {getTicker} from "../../../../lib/tickers";

interface RouletteGameCardProps {
  pot?: number,
  currency: string,
  rate: any
}

export const RouletteGameCard = ({
  pot,
  currency,
  rate
}: RouletteGameCardProps) => {
  return (
    <div className={'game-card__counter'}>
      <div className="game-card__counter_value">
        <div className="game-card__counter_value-number">
          <div className="game-card__counter_value-number--count">
            {$t(currencyValueChanger(currency, rate, pot || 0))}
          </div>
          <div className="game-card__counter_value-number--currency">
            {$t(getTicker(currency))}
          </div>
        </div>
        <div className="game-card__counter_value-info">
          {$t('Pot')}
        </div>
      </div>
      <div className="game-card__counter_percent">
        <div className="game-card__counter_percent-value">
          {$t(`12 / 60`)}
        </div>
        <div className="game-card__counter_percent-info">
          {$t('Slots')}
        </div>
      </div>
    </div>
  )
}