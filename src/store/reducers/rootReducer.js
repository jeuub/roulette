import {combineReducers} from "redux";
import balanceReducer from "./Balance/balanceReducer";
import diceReducer from "./Dice/diceReducer";
import hiloReducer from "./Hilo/hiloReducer";
import statsReducer from "./Stats/statsReducer";
import profileReducer from "./Profile/profileReducer";
import faucetReducer from "./Faucet/faucetReducer";

export default combineReducers({
    balanceReducer: balanceReducer,
    diceReducer: diceReducer,
    hiloReducer: hiloReducer,
    statsReducer: statsReducer,
    profileReducer: profileReducer,
    faucetReducer: faucetReducer
})