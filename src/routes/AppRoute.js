import React from "react";
import { BrowserRouter,Switch,Route } from "react-router-dom";

import MealState from "../contexts/meal/MealState";
import AlertState from "../contexts/alert/AlertState";

const Approute = (props) => {
    return (
        <MealState>
            <AlertState>
                <BrowserRouter>
                    <Switch>
                        
                    </Switch>
                </BrowserRouter>
            </AlertState>
        </MealState>
    );
}

export default Approute;