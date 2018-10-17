function reverse(num){
    let reverse =  String(num)[1] + String(num)[0];
    
    return Number(reverse)

}
console.log(reverse(31));
