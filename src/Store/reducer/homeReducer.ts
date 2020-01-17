import createReducer from '../../shared/createReducer';

export default createReducer({
    moudleName: 'home',
    state: {
        title: '123321',
        bolbList: [
            {
                title: '测试',
            }
        ],
    },
    reducers: {
        setBolbList: (preState: any, state: any) => {
            return {
                ...preState,
                ...state,
            }
        }
    }
});
