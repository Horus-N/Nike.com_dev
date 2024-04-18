import { authActions } from '~/redux/authSlice';
import { post, get } from '~/utils/requests';

export const registerService = async (data, dispatch, navigate) => {
    dispatch(authActions.registerStart());
    try {
        await post('/users', data);
        dispatch(authActions.registerSuccess());
        navigate('/login');
    } catch (err) {
        dispatch(authActions.registerFailure());
    }
};

export const loginService = async (data, dispatch, navigate) => {
    dispatch(authActions.loginStart());
    try {
        const res = await get('/users');
        for (let i = 0; i < res.length; i++) {
            if (res[i].email === data.email && res[i].password === data.password) {
                dispatch(authActions.loginSuccess(res[i].fullName));
                navigate('/');
                return;
            }
        }
        return 'account or password is incorrect!';
    } catch (e) {
        dispatch(authActions.loginFailure());
    }
};
