function SearchFormView(props) {
    function optionCB(Opt) {
        return <option>{Opt}</option>

    }

    function eventACB(event){
        console.log(event.target.value)
    }

    return (
        <div>
            <input onInput={eventACB}></input>
            

            <select onInput={eventACB}>
                <option>Choose:</option>
                {props.dishTypeOptions.map(optionCB)}

            </select>
            <button onClick={eventACB}>Search!</button>
            
        </div>
    );

}

export default SearchFormView;