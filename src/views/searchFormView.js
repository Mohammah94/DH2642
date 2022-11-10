function SearchFormView(props) {
    function optionCB(Opt) {
        return <option>{Opt}</option>

    }

    
    return (
        <div>
            <input onInput={eventACB} placeholder="Search" type="search" ></input>
            

            <select onInput={eventACB}>
                <option>Choose:</option>
                {props.dishTypeOptions.map(optionCB)}

            </select>
            <button onClick={eventACB}>Search!</button>
            
        </div>
    );
    function eventACB(event){
        console.log(event.target.value)
    }


}

export default SearchFormView;
