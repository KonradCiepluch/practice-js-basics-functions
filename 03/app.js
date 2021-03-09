const addNumber = function(n) {
    let number=0;
    for(let i=1; i<=n; i++){
        number+=i;
    }  
    return number; 
}

console.log(addNumber(4));
