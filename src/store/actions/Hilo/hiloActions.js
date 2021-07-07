import {axiosClient} from "../../../utils/axiosClient";
import {updateErrorHandler} from "../Errors/ErrorActions";
import {GET_HILO_HASH, START_HILO_SUCCESS} from "../actionTypes";
import {openModalHandler} from "../Modal/modalActions";

export function getHiloHash(token) {
    return async dispatch => {
        try {
            const response = await axiosClient.get('/HiLo/GetCurrentGameData', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response) {
                dispatch(updateErrorHandler('Cannot load hash', response.data.status))
            } else {
                dispatch(getHiloHashSuccess(response.data.payload.hash, response.data.payload.gameNumber))
            }
        } catch (e) {
            console.log(e)
            dispatch(updateErrorHandler('Cannot load hash', e.response?.status || null))
        }
    }
}

export function startHilo(token, data, hash) {
    return async dispatch => {
        try {
            const response = await axiosClient.post('/HiLo/CheckHiLoResult', data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            if (response.data?.errors?.length) {
                dispatch(updateErrorHandler(response.data.errors[0], response.data.status))
            } else {
                dispatch(startHiloSuccess({...response.data.payload, lastHash: hash}))
                dispatch(openModalHandler())
            }
        } catch (e) {
            dispatch(updateErrorHandler('Hilo game load error', e.response?.status || null))
        }
    }
}

export function getHiloHashSuccess(hash, gameNumber) {
    return {
        type: GET_HILO_HASH,
        hash,
        gameNumber
    }
}

export function startHiloSuccess(result) {
    return {
        type: START_HILO_SUCCESS,
        result
    }
}