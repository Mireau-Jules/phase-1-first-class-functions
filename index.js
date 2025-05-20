function callBackFunction (){
    console.log("call back function");
}

function receivesAFunction(callBackFunction) {
    console.log("I'm a function who receives a function!");
    callBackFunction(); 
}

function returnsANamedFunction (){
    return callBackFunction;
}

function returnsAnAnonymousFunction (){
   return () => console.log("the function those it return");
}