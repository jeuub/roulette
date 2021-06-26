import {combineReducers} from "redux";
import balanceReducer from "./Balance/balanceReducer";
import diceReducer from "./Dice/diceReducer";
import errorReducer from "./Errors/ErrorReducer";
import modalReducer from "./Modal/modalReducer";
import hiloReducer from "./Hilo/hiloReducer";

export default combineReducers({
    balanceReducer: balanceReducer,
    diceReducer: diceReducer,
    errorReducer: errorReducer,
    modalReducer: modalReducer,
    hiloReducer: hiloReducer
})