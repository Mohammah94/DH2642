function DetailsView(props) {
    function ingredientsViewCB(ing){
        return( <th>{ing.name} {ing.amount} {ing.unit} <br> </br></th>);
    }
    return (
        <div>
            <img src={props.dishData.image}> </img>
            <div>
            <th>{props.dishData.title}</th><br></br>
            <th>price:{props.dishData.pricePerServing}</th> <br></br>
            <th>for {props.guests} guests {props.guests * props.dishData.pricePerServing}</th>
            </div>
            <div>

            {props.dishData.extendedIngredients.map(ingredientsViewCB)}
            </div>
            <div> {props.dishData.instructions}</div>
            <div><a href={props.dishData.sourceUrl}> More information!</a></div>
            
            <button class="button" disabled={props.isDishInMenu} onClick={function addDishACB() {
                    props.addDish();
                    window.location.hash = "#search";
                }}>
                Add to menu!
            </button>
            <button class="button" onClick={function cancelACB(){window.location.hash = "#search";}}> Cancel!</button>

        </div>

    );
}
export default DetailsView;