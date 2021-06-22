import React, {useState, useEffect, useContext} from 'react';
import './DicePage.scss'
import {UserCard} from "../../components/UserCard/UserCard";
import {BetCard} from "../../components/BetCard/BetCard";
import {GameCard} from "../../components/GameCard/GameCard";
import {useDispatch, useSelector} from "react-redux";
import {getDiceHash} from "../../store/actions/Dice/diceActions";
import {AuthContext} from "../../context/AuthContext";
import {DiceResults} from "./components/DiceResults/DiceResults";

export const DicePage = () => {

  const defaultFormState = {
    range: 50,
    betValue: 0.0001
  }

  const [formState, setFormState] = useState<any>(defaultFormState)

  const dispatch = useDispatch()

  const {token} = useContext(AuthContext)

  const hash = useSelector((state: any) => state.diceReducer.hash)

  useEffect(() => {
    dispatch(getDiceHash(token))
  }, [token]);

  const handleChange = (value: any, iterator: string) => {

    switch (iterator) {
      case 'range':
        setFormState((prev: any) => {
          return {
            ...prev,
            range: Number(value)
          }
        })
        break;
      case 'bet':
        setFormState((prev: any) => {
          return {
            ...prev,
            betValue: Number(value)
          }
        })
        break;
    }
  }

  return (
    <div className={'dice-page'}>
      <div className="dice-page__content">
        <UserCard />

        <BetCard
          formState={formState}
          handleChange={handleChange}
        />

        <GameCard
          formState={formState}
          hash={hash}
        />

        <DiceResults />
      </div>
    </div>
  )
}