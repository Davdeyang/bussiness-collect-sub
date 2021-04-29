class Time {
    constructor () {
        let vm = this;
        vm.now = null;
        vm.year = null;             //得到年份
        vm.month = null;            //得到月份
        vm.date = null;             //得到日期
        vm.day = null;              //得到周几
        vm.hour = null;             //得到小时
        vm.minu = null;             //得到分钟
        vm.sec = null;              //得到秒
        vm.MS = null;               //获取毫秒
    }
    computed () {
        let vm = this;
        vm.now = new Date();
        vm.year = vm.now.getFullYear();         //得到年份
        vm.month = vm.now.getMonth();           //得到月份
        vm.date = vm.now.getDate();             //得到日期
        vm.day = vm.now.getDay();               //得到周几
        vm.hour = vm.now.getHours();            //得到小时
        vm.minu = vm.now.getMinutes();          //得到分钟
        vm.sec = vm.now.getSeconds();           //得到秒
        vm.MS = vm.now.getMilliseconds();       //获取毫秒
        vm.month = vm.month + 1;
        if (vm.month < 10) vm.month = "0" + vm.month;
        if (vm.date < 10) vm.date = "0" + vm.date;
        if (vm.hour < 10) vm.hour = "0" + vm.hour;
        if (vm.minu < 10) vm.minu = "0" + vm.minu;
        if (vm.sec < 10) vm.sec = "0" + vm.sec;
        if (vm.MS < 100) vm.MS = "0" + vm.MS;
        return vm.year + "-" + vm.month + "-" + vm.date + " " + vm.hour + ":" + vm.minu + ":" + vm.sec + " "
    }
	
	createNumber(){
		let vm = this;
		vm.now = new Date();
		vm.year = vm.now.getFullYear();         //得到年份
		vm.month = vm.now.getMonth();           //得到月份
		vm.date = vm.now.getDate();             //得到日期
		vm.day = vm.now.getDay();               //得到周几
		vm.hour = vm.now.getHours();            //得到小时
		vm.minu = vm.now.getMinutes();          //得到分钟
		vm.sec = vm.now.getSeconds();           //得到秒
		vm.MS = vm.now.getMilliseconds();       //获取毫秒
		vm.month = vm.month + 1;
		if (vm.month < 10) vm.month = "0" + vm.month;
		if (vm.date < 10) vm.date = "0" + vm.date;
		if (vm.hour < 10) vm.hour = "0" + vm.hour;
		if (vm.minu < 10) vm.minu = "0" + vm.minu;
		if (vm.sec < 10) vm.sec = "0" + vm.sec;
		if (vm.MS < 100) vm.MS = "0" + vm.MS;
		return vm.year + vm.month + vm.date + vm.hour + vm.minu + vm.sec;
	}

    today () {
        let vm = this;
        return vm.computed();
    }
	dateFunc () {
        let vm = this;
        vm.now = new Date();
        vm.year = vm.now.getFullYear();         //得到年份
        vm.month = vm.now.getMonth();           //得到月份
        vm.date = vm.now.getDate();             //得到日期
        vm.month = vm.month + 1;
        if (vm.month < 10) vm.month = "0" + vm.month;
        if (vm.date < 10) vm.date = "0" + vm.date;
        return vm.year + "-" + vm.month + "-" + vm.date
    }
    timestampToTime(timestamp) {
        var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = date.getDate() + ' ';
        return Y + M + D;
    }
}
export default new Time();