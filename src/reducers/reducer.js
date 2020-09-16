import dashbardData from "./../dashbaordData.json"

const defaultState ={
    dashbaord : dashbardData
}

function reducer(state = defaultState,action) {
    switch(action.type){
        case "GET_DASHBOARD_DATA":
            return {
                ...state,
                dashboard : action.payload
            }
            default : return state
    }
}

export default reducer;