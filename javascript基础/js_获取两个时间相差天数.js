function DateDiff(d1,d2) {
	let day = 24*60*60*1000;
	try{
		let checkDate1 = new Date(d1);
		let checkTime1 = checkDate1.getTime();

		let checkDate2 = new Date(d2);
		let checkTime2 = checkDate2.getTime();

		let TimeDiff = (checkTime1 - checkTime2)/day;
		return TimeDiff;
	}
	catch (e){
		return false;
	}
}
console.log(DateDiff("2015/10/15","2013/05/15"));
