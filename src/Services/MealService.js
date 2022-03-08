import axios from "axios";

class MealService{
    GetMealsByName(mealName){
        return axios.get(`www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
    }

    GetMealsByCategoryName(categoryName){
        return axios.get(`www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
    }

    GetMealsByAreaName(areaName){
        return axios.get(`www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`);
    }

    GetMealsByIngredient(ingredientName){
        return axios.get(`www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientName}`);
    }

    GetMealById(mealId){
        return axios.get(`www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    }

    GetRandomMeal(){
        return axios.get("www.themealdb.com/api/json/v1/1/random.php");
    }

    GetIngredients(){
        return axios.get("www.themealdb.com/api/json/v1/1/list.php?i=list");
    }

    GetCategories(){
        return axios.get("www.themealdb.com/api/json/v1/1/list.php?c=list");
    }

    GetAreas(){
        return axios.get("www.themealdb.com/api/json/v1/1/list.php?a=list");
    }
}

export default MealService;