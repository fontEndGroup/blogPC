import createReducer from '../../shared/createReducer';

export default createReducer({
    moudleName: 'user',
    reducers: {
        changeLogin(preState:any,state:any){
            return {
                ...preState,
                ...state,
            }
        },
    },
    state: {
        userId: '12321',
        userName: '游客',
        userImg: '',
    }
})
