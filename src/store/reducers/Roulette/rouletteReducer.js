import {GET_ROULETTE_GAME, GET_ROULETTE_RESULT, UPDATE_ROULETTE} from "../../actions/actionTypes";

const initialState = {
    gameData: {},
    hash: '',
    result: {}
};

export default function rouletteReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ROULETTE_GAME:
            return {
                ...state,
                gameData: action.gameData,
                hash: action.gameData.hash,
                gameNumber: action.gameData.gameNumber
            }
        case UPDATE_ROULETTE:
            return {
                ...state,
                gameData: {...initialState.gameData, ...action.gameData}
            }
        case GET_ROULETTE_RESULT:
            return {
                ...state,
                result: action.result
            }
        default:
            return state
    }
}