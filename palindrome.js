var isPalindrome = function(x){
    let newString = x.toLowerCase();
    let newArray = Array.from(newString); 
    
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

var result = isPalindrome('Shanu');
console.log(result);