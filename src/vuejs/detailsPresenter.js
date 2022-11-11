import DetailsView from "../views/detailsView.js";
import PromiseNoData from "../views/promiseNoData.js";

function detailsPresenter(props){

PromiseNoData(props.model.currentDishPromiseState) || <DetailsView dishData={props.model.currentDishPromiseState.data}  />









}
export default detailsPresenter;