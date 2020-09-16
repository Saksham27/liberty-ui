import dashboardData from "./../dashbaordData.json"

const defaultState ={
    dashbaord : dashboardData
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