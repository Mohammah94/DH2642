import { searchDishes } from "../dishSource.js"
function SearchResultsView(param) {
    let searchResults=searchDishes(param)
function resultSearchACB(){

}

    return (
        <div>
        <span  class="searchResult" onClick={searchResults}>

            <img src={"https://spoonacular.com/recipeImages/"}></img>
            <div>{searchResults.title}</div>
            
        </span>
        </div> 
    );

}
export default SearchResultsView;