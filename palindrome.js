// var isPalindrome = function(x){
//     let newString = x.toLowerCase();
//     let newArray = Array.from(newString); 
    
//     var len = newArray.length;
//     var revArray = newArray.reverse();
//     for(i = 0;i<(len-1);i++){
//         if(newArray[i] === revArray[len-1]){
//             return true;
//         }
//         else {
//             return false
//         };
//     }
  
// }

// var result = isPalindrome('Shanu');
// console.log(result);

////// integer plaindrome checking

var isPalindrome = function(x){
    let generatedArray = [];
    let sNumber = x.toString();
    var newArray = Array.from(sNumber);
    let len = newArray.length;
    var revArray = newArray.reverse();
    
    
    for (let i = 0;i<(len-1);i++ ){
        if(newArray[i] === revArray[len-1]){
                        return 'its a palindrome';
                    }
                    else {
                        return 'not a palindrome'
                    };
        

    }

    
  
}
var result = isPalindrome(1221);
console.log(result);
