function SearchResultsView(props) {
    function resultACB(result) {

        function searchClickACB() {
            console.log(result.target.value);
        }
        return (
            <span class="searchResult" onClick={searchClickACB}>
                <img
                    src={"https://spoonacular.com/recipeImages/" + result.image}
                    height="100"
                ></img>
                <div>{result.title}</div>
            </span>
        );
    }
    return (
        <div>

            {props.searchResults.map(resultACB)}

        </div>
    );
}
export default SearchResultsView;