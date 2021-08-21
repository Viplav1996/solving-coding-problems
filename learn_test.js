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