type storeDataType = {
    moudleName: string;
    state: {
        [key: string]: any
    },
    reducers: {
        [key: string]: (preState: any, state: any) => {
            [key: string]: any
        },
    },
}
const createReducer = function (storeData: storeDataType) {
    const { state, reducers, moudleName } = storeData;
    return {
        moudleName,
        reducer: (initialState: any = state, action: { type: string, [key: string]: any }) => {
            const { type, data } = action;
            return reducers[type] ? reducers[type](initialState, data) : initialState;
        }
    }
};

export default createReducer;
