import SearchResultsView from "../views/searchResultsView";
import SearchFormView from "../views/searchFormView.js";
import promiseNoData from "../views/promiseNoData";

export default function searchPresenter(props) {
    
if (!props.model.searchResultsPromiseState.promise ){
    props.model.doSearch(props.model.searchParams);
}
function searchFromMenuACB() {
    props.model.doSearch(props.model.searchParams);
  }
  
  function textSearchMenuACB(text) {
    props.model.setSearchQuery(text);
  }

  function typeSearchMenuACB(type) {
    props.model.setSearchType(type);
  }

  function onClickACB(res) {
    props.model.setCurrentDish(res.id)
   }  
return (
    <div>
        <SearchFormView
            dishTypeOptions={["starter", "main course", "dessert"]}
            searchFromMenu={searchFromMenuACB}
            searchText={textSearchMenuACB}
            searchType={typeSearchMenuACB}
        />

        { promiseNoData(props.model.searchResultsPromiseState)|| <SearchResultsView onResultClick={onClickACB} searchResults={props.model.searchResultsPromiseState.data} />}
    </div>
);

}