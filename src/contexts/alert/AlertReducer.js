
const AlertReducer = (state,action) => {
    switch(action.type){
        case "SET_ALERT":
            return {
                alert: { alertType: action.alertType, aclertMessage: action.alertMessage },
            };
        case "CLEAR_ALERT":
            return {
                alert: null,
            };
        default:
            return state;
    }
}

export default AlertReducer;