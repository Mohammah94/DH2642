export { getDishDetails, searchDishes };
import { BASE_URL, API_KEY } from "/src/apiConfig.js";

function treatHTTPResponseACB(response){
    if(response.status===200)
        return response.json();
    throw new Error(response.status);
}
async function getDishDetails(params) {
    console.log("aaaaaaaaaaaaaaaaaaaaaaa")
    console.log(params.toString())
    const endpoint = "recipes/";
    return fetch(BASE_URL + endpoint + params.toString() + "/information", {  // object literal
        "method": "GET",              // HTTP method
        "headers": {                  // HTTP headers, also object literal
            'X-Mashape-Key': API_KEY,
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        } // end of headers object
    }/* end of second fetch parameter, object */
    )
        .then(treatHTTPResponseACB);



}
function searchDishes(params) {
    const endpoint = "recipes/search?";
    function transformResultACB(object) {
        return Object.values(object);
       }

    return fetch(BASE_URL + endpoint+ new URLSearchParams(params), {  // object literal
        "method": "GET",              // HTTP method
        "headers": {                  // HTTP headers, also object literal
            'X-Mashape-Key': API_KEY,
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        } // end of headers object
    }/* end of second fetch parameter, object */
    )
        .then(treatHTTPResponseACB)
        .then(transformResultACB);

    /*TODO throw if the HTTP response is not 200, otherwise return response.json()*/
}


