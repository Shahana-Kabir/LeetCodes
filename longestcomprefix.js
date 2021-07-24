var commonPrefix = function (strings) {
    var prefix = "";
    const firstString = strings[0];

    for (let i = 0; i < firstString.length; i++) {
        for (let wordIndex = 1; wordIndex < strings.length; wordIndex++) {
            if (strings[wordIndex].charAt(i) !== firstString.charAt(i)) {


                return prefix;
            }
        }

        prefix += firstString.charAt(i);
    }
    return prefix;


}


var result = commonPrefix(['flower', 'flow', 'floght']);

console.log(result);