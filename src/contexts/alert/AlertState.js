import React, {useReducer} from "react";

import AlertReducer from "./AlertReducer";
import AlertContext from "./AlertContext";

const AlertState = (props) => {
    const initialState = {
        alert: null,
    };

    const [state = initialState,dispatch] = useReducer(AlertReducer);

    return <AlertContext.Provider value={{

    }}>
        {props.children}
    </AlertContext.Provider>
}

export default AlertState;