function resolvePromise(promiseToResolve, promiseState, notifyABC) {
if(promiseToResolve !== null){
    promiseState.promise = promiseToResolve;
    promiseState.data = null;
    promiseState.error = null;
    if(notify){notify()}

    function saveDataACB(res){
        if (promiseState.promise !== promiseToResolve){ return;}
        promiseState.data = res;
        if(notifyABC){notifyABC()}
    }
    function saveErrorACB(err){
        if (promiseState.promise !== promiseToResolve){return;}
        promiseState.error = err;
        if(notifyABC){notifyABC()}
    }

    promiseToResolve.then(saveDataACB).catch(saveErrorACB);
   }
}
export default resolvePromise;
