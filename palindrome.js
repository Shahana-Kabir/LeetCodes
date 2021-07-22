var isPalindrome = function(x){
    let newArray = Array.from(x); 
    var len = newArray.length;
    var revArray = newArray.reverse();
    for(i = 0;i<(len-1);i++){
        if(newArray[i] === revArray[len-1]){
            return true;
        }
        else {
            return false
        };
    }

  
}

var result = isPalindrome('shanu');
console.log(result);