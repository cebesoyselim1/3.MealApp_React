import React, {useReducer} from "react";

import MealReducer from "./MealReducer";
import MealContext from "./MealContext";

const MealState = (props) => {
    const initialState = {
        meals: [],
        meal: null,
        ingredients: [],
        isLoading: false 
    }

    const [state = initialState,dispatch] = useReducer(MealReducer);

    return <MealContext.Provider value={{

    }}>
        {props.children}
    </MealContext.Provider>
}

export default MealState;