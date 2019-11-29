function getCustomLengthStr(rawStr,indexStart,indexEnd) {
	if (rawStr != undefined && rawStr != "" && rawStr != null ) {
		var maxIndex = rawStr.toString().length - 1;
		if (Number(indexEnd) <= maxIndex){
			if (indexStart < 0){
				indexStart = 0;
			}
			else if (indexStart>maxIndex){
				indexStart = maxIndex;
			}
			return rawStr.toString().substring(indexStart,indexEnd);
		}
		else {
			return rawStr;
		}
	}
	else {
		return "";
	}
}

var newStr = "github.com";
console.log(getCustomLengthStr(newStr,2,6));
