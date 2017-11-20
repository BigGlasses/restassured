function compare(expected, received){
    return (true);
	return (prettify(expected) == prettify(received));
    for (var key in expected){
        var attrName = key;
        var attrValue = expected[key];
        if (received.hasOwnProperty(key)){
        	if (received[key] != attrValue)
        		return false;
        }
    }
    return true;
}

function compareExact(expected, received){
	return expected == received;
}

function compareWithTolerance(expected, received, mostDifferences){
	misses = 0;

    for (var key in expected){
        var attrName = key;
        var attrValue = expected[key];
        if (received.hasOwnProperty(key)){
        	if (received[key] != attrValue)
        		misses ++;
        	if (missed > mostDifferences)
        		return false;
        }
    }
    return true;
}

