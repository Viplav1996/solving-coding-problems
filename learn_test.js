/*
console.log("Hello World");
console.log("Program......Start");

// Enter code here
let store = '';
function chessBoard(n){
    for(let i=0;i<n;i++){
        for(let j =0;j<n;j++){
            if((i+j)%2 == 0) store += " ";
            else store += "#";
        } store += "\n";
    } 
    return console.log(store + "\n");
} 

chessBoard(8);

console.log("End.........Bye!!!");
*/


// ######################    HIGHER ORDER FUCNTION      #########################
/*
function noisy(f){
    return (...args) => {
        console.log("Calling with args "+ args);
        let res = f(...args);
        console.log("Calling with args "+ args + " return "+ res);
    }
}
noisy(Math.min)(3,2,1);              // function funcName(outsideFunc)(InsideFunc);

*/
/* */
/* 
function greaterThan(n){
    return m => m>n;
}

let greaterThan10 = greaterThan(10); // fucntion declared as a variable;

console.log(greaterThan10(10));
*/

function isOdd(n){
    if(n%2 == 1) return console.log("Number "+ n + " is ODD ");
    
}

function repeat(n, func){
    
    for(let i=0; i<=n ; i++) {
        console.log('\n');
        func(i);
        console.log('\n');
    }
}

repeat(3, isOdd);
