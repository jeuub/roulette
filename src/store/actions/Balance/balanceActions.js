import {axiosClient} from "../../../utils/axiosClient";
import {
    BONUS_BALANCE,
    CHANGE_CURRENCY,
    GET_BTC_BALANCE, GET_CURRENT_RATE,
    GET_PAYMENT_HISTORY,
    GET_PAYMENT_PROOF,
    GET_USD_BALANCE,
    GET_WALLETS
} from "../actionTypes";
import axios from "axios";
import {updateInformer} from "../Application/applicationActions";

export function changeCurrency(ticker) {
    return {
        type: CHANGE_CURRENCY,
        currency: ticker
    }
}

export function getBalance(token, rate) {
    return async dispatch => {
        try {
            const response = await axiosClient.get('/Profile/GetBalanceInBTC', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            dispatch(getBtcBalance(response.data.payload))

            const usdValue = response.data.payload * rate

            dispatch(getUsdBalance(usdValue))

        } catch (e) {
            dispatch(updateInformer({message: e.response.data.errors[0], active: true, type: 'error'}))
        }
    }
}

export function getBonusBalance(token) {
    return async dispatch => {
        try {
            const response = await axiosClient.get('/Profile/GetBonusBalanceInBTC', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            dispatch(getBonusBtcBalance(response.data.payload))

        } catch (e) {
            dispatch(updateInformer({message: e.response.data.errors[0], active: true, type: 'error'}))
        }
    }
}

export function getCurrentRate(currency) {
    return async dispatch => {
        try {
            const instanceUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json'

            const response = await axios.get(instanceUrl)

            const data = Object.entries(response.data.bpi).map(item => {
                return {
                    currency: item[0],
                    payload: item[1]
                }
            }).find(item => item.currency === currency.toUpperCase())

            dispatch(getCurrentRateSuccess(data.payload.rate_float))
        } catch (e) {
            dispatch(updateInformer({message: 'Can`t load current bitcoin rate', active: true, type: 'error'}))
        }
    }
}

export function createWallet(token, data) {
    return async dispatch => {
        try {
            const response = await axiosClient.post('/Profile/AddWallet', data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            if (response.data?.errors?.length) {
                dispatch(updateInformer({message: response.data.errors[0], active: true, type: 'error'}))
            } else {
                return response.data.success
            }

        } catch (e) {
            dispatch(updateInformer({message: e.response.data.errors[0], active: true, type: 'error'}))
        }
    }
}

export function getWallets(token) {
    return async dispatch => {
        try {
            const response = await axiosClient.get('/Profile/GetWithdrawWallets', {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                params: {
                    currency: 'BTC'
                }
            })

            if (response.data?.errors?.length) {
                dispatch(updateInformer({message: response.data.errors[0], active: true, type: 'error'}))
            } else {
                dispatch(getWalletsSuccess(response.data.payload))
            }

        } catch (e) {
            dispatch(updateInformer({message: e.response.data.errors[0], active: true, type: 'error'}))
        }
    }
}

export function deleteWallet(token, data) {
    return async dispatch => {
        try {
            const response = await axiosClient.delete(`/Profile/DeleteWalletAddress`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                params: {
                    address: data
                }
            })

            if (response.data?.errors?.length) {
                dispatch(updateInformer({message: response.data.errors[0], active: true, type: 'error'}))
            } else {
                return response.data.success
            }

        } catch (e) {
            dispatch(updateInformer({message: e.response.data.errors[0], active: true, type: 'error'}))
        }
    }
}

export function createWithdraw(token, data) {
    return async dispatch => {
        try {
            await axiosClient.post('/Payments/WithdrawalRequest', data,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

        } catch (e) {
            dispatch(updateInformer({message: e.response.data.errors[0], active: true, type: 'error'}))
        }
    }
}

export function getPaymentHistory(token, data) {
    return async dispatch => {
        try {
            const response = await axiosClient.get('/Payments/GetTransactionsHistory',{
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                params: {
                    ...data
                }
            })

            if (response.data?.errors?.length) {
                dispatch(updateInformer({message: response.data.errors[0], active: true, type: 'error'}))
            } else {
                dispatch(getPaymentHistorySuccess(response.data.payload.data))
            }

        } catch (e) {
            dispatch(updateInformer({message: e.response.data.errors[0], active: true, type: 'error'}))
        }
    }
}

export function getPaymentProof(token, data) {
    return async dispatch => {
        try {
            const response = await axiosClient.get('/Payments/GetPaymentProof',{
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                params: {
                    ...data
                }
            })

            console.log(response, data)

            if (response.data?.errors?.length) {
                dispatch(updateInformer({message: response.data.errors[0], active: true, type: 'error'}))
            } else {
                dispatch(getPaymentProofSuccess(response.data.payload.data))
            }

        } catch (e) {
            dispatch(updateInformer({message: e.response.data.errors[0], active: true, type: 'error'}))
        }
    }
}

export function getBtcBalance(balanceBtc) {
    return {
        type: GET_BTC_BALANCE,
        balanceBtc
    }
}

export function getUsdBalance(balanceUsd) {
    return {
        type: GET_USD_BALANCE,
        balanceUsd
    }
}

export function getBonusBtcBalance(bonusBalance) {
    return {
        type: BONUS_BALANCE,
        bonusBalance
    }
}

export function getCurrentRateSuccess(rate) {
    return {
        type: GET_CURRENT_RATE,
        rate
    }
}

export function getWalletsSuccess(wallets) {
    return {
        type: GET_WALLETS,
        wallets
    }
}

export function getPaymentHistorySuccess(history) {
    return {
        type: GET_PAYMENT_HISTORY,
        history
    }
}

export function getPaymentProofSuccess(proofData) {
    return {
        type: GET_PAYMENT_PROOF,
        proofData
    }
}