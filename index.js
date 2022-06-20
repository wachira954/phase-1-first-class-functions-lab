// Code your solution in this file!
function receivesAFunction(spy){
    console.log(spy());
}
receivesAFunction(function() {return spy})

function returnANamedFunction(){
    let fn;
    if (fn = 'function'){
        return function () {'return a function'};
    }
    else if (fn.name = '')
    return 'return a named function'
} 
function returnsAnAnonymousFunction(){
    let fn;
    if (fn = 'function'){
        return function (){'retuens a function'};
    }
    else if (fn.name ='')
    return 'returns an anonymous function';
}