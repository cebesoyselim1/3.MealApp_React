
const MealReducer = (state,action) => {
    switch(action.type){
        case "SET_MEALS":
            return {
                ...state,
                meals: action.meals,
                isLoading: true,
            };
        case "CLEAR_MEALS":
            return {
                ...state,
                meals: [],
            };
        case "SET_MEAL":
            return {
                ...state,
                meal: action.meal,
                ingredients: action.ingredients,
                isLoading: true,
            };
        case "CLEAR_MEAL":
            return {
                ...state,
                meal: null,
                ingredients: [],
            };
        case "SET_LOADING":
            return {
                ...state,
                isLoading: action.isLoading,
            };
        default:
            return state;
    }
}

export default MealReducer;