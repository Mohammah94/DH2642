import render from "./teacherRender.js";

const X= TEST_PREFIX;
let getDishDetails;
let DetailsView;

try{
    getDishDetails= require("/src/"+X+"dishSource.js").getDishDetails;
    DetailsView=require("/src/views/"+X+"detailsView.js").default;
    if(!getDishDetails || !DetailsView)throw "not defined";
}catch(e){
    render(<div>Please write /src/dishSource.js and export searchDishes<br/>
             Please write /src/views/searchResultsView.js to define SearchResultsView
           </div>,  document.getElementById('root'));
}
if(getDishDetails && DetailsView){
    //const AA= 523145,   BB= 787321,   CC= 452179;
    //const AA= 548321,   BB= 758118,   CC=    1152690;
    const AA= 1445969,  BB=  1529625, CC=    32104;
    render(
        <div>Wait...</div>,
        document.getElementById('root')
    );
    Promise.all([getDishDetails(AA), getDishDetails(BB)
                ]).then(
                    function testACB([dish1, dish2]){
                        render(
                            <div>
                              <div style={{float:"left",width:"50%"}}><DetailsView dishData={dish1} isDishInMenu={true} guests={7}/></div>
                              <div style={{float:"right",width:"50%"}}><DetailsView dishData={dish2} isDishInMenu={false} guests={3}/></div>
                            </div>
                            , document.getElementById('root')
                        );
                    }).catch(function errorACB(err){
                        render(<div>{err}</div>,document.getElementById('root'));
                    });
}
