import {updateErrorHandler} from "../Errors/ErrorActions";
import {axiosClient} from "../../../utils/axiosClient";
import {
    GET_AVATAR,
    GET_NICKNAME_VISIBILITY,
    GET_REFERRALS,
    GET_REFERRALS_STATISTIC,
    GET_USER_STATS
} from "../actionTypes";

export function getAvatar(token) {
    return async dispatch => {
        try {
            const response = await axiosClient.get('/Profile/GetAvatarUrl', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.data?.errors?.length) {
                dispatch(updateErrorHandler(response.data?.errors[0], response.data.status))
            } else {
                dispatch(getAvatarSuccess(response.data.payload))
            }
        } catch (e) {
            dispatch(updateErrorHandler('Cannot load avatar', e.response?.status || null))
        }
    }
}

export function uploadAvatar(token, data) {
    return async dispatch => {
        try {
            const response = await axiosClient.post('/Profile/UploadAvatar', data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response) {
                dispatch(updateErrorHandler('Upload avatar error', response.data.status))
            }
        } catch (e) {
            dispatch(updateErrorHandler('Cannot upload avatar', e.response?.status || null))
        }
    }
}

export function getUserStats(token) {
    return async dispatch => {
        try {
            const response = await axiosClient.get('/Statistics/GetCurrentUserStats', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.data?.errors?.length) {
                dispatch(updateErrorHandler(response.data?.errors[0], response.data.status))
            } else {
                dispatch(getUserStatsSuccess(response.data.payload))
            }
        } catch (e) {
            dispatch(updateErrorHandler('Cannot load user statistics', e.response?.status || null))
        }
    }
}
export function getNicknameVisibility(token) {
    return async dispatch => {
        try {
            const response = await axiosClient.get('/Profile/IsNicknameHidden', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.data?.errors?.length) {
                dispatch(updateErrorHandler(response.data?.errors[0], response.data.status))
            } else {
                dispatch(getNicknameVisibilitySuccess(response.data.payload))
            }
        } catch (e) {
            dispatch(updateErrorHandler('Cannot load nickname visibility', e.response?.status || null))
        }
    }
}

export function changeNickname(token, data) {
    return async dispatch => {
        try {
            const response = await axiosClient.patch('/Profile/ChangeNickname', data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.data?.errors?.length) {
                dispatch(updateErrorHandler(response.data?.errors[0], response.data.status))
            }
        } catch (e) {
            dispatch(updateErrorHandler('Cannot change nickname', e.response?.status || null))
        }
    }
}

export function changeEmail(token, data) {
    return async dispatch => {
        try {
            const response = await axiosClient.patch('/Profile/ChangeEmail', data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.data?.errors?.length) {
                dispatch(updateErrorHandler(response.data?.errors[0], response.data.status))
            }
        } catch (e) {
            dispatch(updateErrorHandler('Cannot change email', e.response?.status || null))
        }
    }
}

export function changePassword(token, data) {
    return async dispatch => {
        try {
            const response = await axiosClient.post('/Auth/ChangePassword', data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.data?.errors?.length) {
                dispatch(updateErrorHandler(response.data?.errors[0], response.data.status))
            }
        } catch (e) {
            dispatch(updateErrorHandler('Cannot change email', e.response?.status || null))
        }
    }
}

export function getReferrals(token) {
    return async dispatch => {
        try {
            const response = await axiosClient.get('/Profile/GetReferals', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            if (response.data?.errors?.length) {
                dispatch(updateErrorHandler(response.data?.errors[0], response.data.status))
            } else {
                dispatch(getReferralsSuccess(response.data.payload))
            }

        } catch (e) {
            dispatch(updateErrorHandler('Cannot load referrals', e.response?.status || null))
        }
    }
}

export function getReferralsStatistic(token, owner) {
    return async dispatch => {
        try {
            const response = await axiosClient.get('/Profile/GetReferalsStatistics', {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                params: {
                    ownerId: owner
                }
            })

            if (response.data?.errors?.length) {
                dispatch(updateErrorHandler(response.data?.errors[0], response.data.status))
            } else {
                dispatch(getReferralsStatisticSuccess(response.data.payload))
            }

        } catch (e) {
            dispatch(updateErrorHandler('Cannot load referrals statistics', e.response?.status || null))
        }
    }
}

export function getAvatarSuccess(avatar) {
    return {
        type: GET_AVATAR,
        avatar
    }
}

export function getUserStatsSuccess(statistic) {
    return {
        type: GET_USER_STATS,
        statistic
    }
}

export function getReferralsSuccess(referrals) {
    return {
        type: GET_REFERRALS,
        referrals
    }
}

export function getReferralsStatisticSuccess(statistic) {
    return {
        type: GET_REFERRALS_STATISTIC,
        statistic
    }
}

export function getNicknameVisibilitySuccess(nicknameVisibility) {
    return {
        type: GET_NICKNAME_VISIBILITY,
        nicknameVisibility
    }
}