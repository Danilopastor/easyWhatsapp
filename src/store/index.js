import { createStore } from 'redux';

const LOAD_STORAGE = {
    data: '',
    DataConfig :'',
    updateConfig: false,
    status_backbutton : false
}
function reducer(state = LOAD_STORAGE, action) {
    if(action.type === 'LOAD_DATA'){
        return { ...state, data: action.data.data, DataConfig : action.data.Config}
    }
    if(action.type === 'UPDATE_STATUS'){
        return { ...state, status_backbutton: action.status }
    }
    if(action.type === 'UPDATE_CONFIG'){
        return { ...state, updateConfig: action.status }
    }
    return state
}
const store = createStore(reducer);

export default store;