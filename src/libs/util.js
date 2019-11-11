let util = {

};
util.title = function (title) {
    title = title ? title + ' - Light Typeing' : 'Light Typing';
    window.document.title = title;
};

util.getTodayTime = function () {	// 获取今天时间戳
    const date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();
};

util.prevDay = function (timestamp = (new Date()).getTime()) {	// 获取上一天格式化日期
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 10
        ? '0' + (date.getMonth() + 1)
        : date.getMonth() + 1;
    const day = date.getDate() < 10
        ? '0' + date.getDate()
        : date.getDate();
    return year + '' + month + '' + day;
};

util.lessonCardsMaker = function(startId, endId, title="", isLock=true, icon=""){
	var lessonCard = {}
	var array = [];
	for(let i=startId; i<= endId; i++){
		lessonCard = {
			id: i,
			title,
			isLock,
			icon
		}
		console.log(lessonCard,""+",");
	}
	
}

export default util;