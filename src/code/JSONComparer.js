// Compare jsons to figure out if they are identical or subsets
function compare(expected, received){
    //Check if the received is an array, then check each individual element if it is.
    if (Array.isArray(received)){
        for (var i = 0; i < received.length; i ++){
            if (!compare(expected[i], received[i])){
                return false;
            }
        }
        return true;
    }
    //Check to see if the key-value pairs match up between expected and received.
    for (var key in expected){
        var attrName = key;
        var attrValue = expected[key];
        if (received.hasOwnProperty(key)){
            if (Array.isArray(received[key])){
                if (!compare(received[key], attrValue))
                    return false;
            }
        	else if (received[key] != attrValue)
        		return false;
        }
    }
    return true;
}

//Compare jsons to check if they are exactly identical.
function compareExact(expected, received){
    return (prettify(expected) == prettify(received));
}

//Compare jsons to check if they are identical with some lenience.
function compareWithTolerance(expected, received, mostDifferences){
    var misses = 0;
    //Check if the received is an array, then check each individual element if it is.
    if (Array.isArray(received)){
        for (var i = 0; i < received.length; i ++){
            if (!compare(expected[i], received[i])){
                misses ++;
            }
            if (misses > mostDifferences)
                return false;
        }
        return true;
    }
    //Check to see if the key-value pairs match up between expected and received.
    for (var key in expected){
        var attrName = key;
        var attrValue = expected[key];
        if (received.hasOwnProperty(key)){
            //Check if the key-value pair is an array, then compare the individual elements in the array
            if (Array.isArray(received[key])){
                if (!compare(received[key], attrValue))
                    misses ++;
                if (misses > mostDifferences) //Return false if the number of misses surpasses the lenience.
                    return false;
            }
            else if (received[key] != attrValue)
                misses ++;
            if (misses > mostDifferences)  //Return false if the number of misses surpasses the lenience.
                return false;
        }
    }
    return true;
}

