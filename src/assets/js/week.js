class Week {
    constructor () {
        let vm = this;
        vm.mydate = null;
        vm.myddy = null;
        vm.weekDay = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    }
    weekDayFunc () {
        let vm = this;
        vm.mydate = new Date();
        vm.myddy = vm.mydate.getDay();//获取存储当前日期
        return vm.weekDay[vm.myddy];
    }
}
export default new Week();