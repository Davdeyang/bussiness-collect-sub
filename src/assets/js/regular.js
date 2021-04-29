export default {
    /**
     * 电话号码/手机号正则验证
     */
    number(){
        return /^1[3|4|5|6|7|8][0-9]\d{8}$/
    },
    /**
     * 电话号码正则验证
     */
    phone(){
         return /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
    },
    /**
     * 身份证号码正则验证
     */
    idCard(){
        return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    },
    email(){
        return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    },
    /**
     * 匹配以字母开头字母开头，英文和数字混合的6-20位(密码/用户名)数字正则验证
     */
    passwordReg(){
        return /^[a-zA-Z]([a-zA-Z0-9]{5,20})$/;
    },

    /**
     * 只能输入数字正则
     */
    num(){
        return /^[+-]?(0|([1-9]\d*))(\.\d+)?$/;
    },

    numComma(){
        return /^[\d,]*$/;
    },

    /**
     * element-ui自定义验证函数
     *
     */

    /**
     * 输入纯数字验证 开头可以为0
     */
    validateIsNumber(rule, value, callback){
        if (value === '') {
            callback(new Error('不能为空'));
        } else if (!/^\d*$/ig.test(value)) {
            callback(new Error('只能输入数字'));
        } else {
            callback();
        }
    },
    /**
     * 输入纯数字验证
     */
    validateNum(rule, value, callback){
        if (value === '') {
            callback(new Error('不能为空'));
        } else if (!/^[+-]?(0|([1-9]\d*))(\.\d+)?$/.test(value)) {
            callback(new Error('只能输入数字'));
        } else {
            callback();
        }
    },

    /**
     * 输入的电话号码验证
     * @param rule
     * @param value
     * @param callback
     */
    validateNumber(rule, value, callback){
        if (value === '') {
            callback(new Error('请输入您的手机号'));
        } else if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(value)) {
            callback(new Error('手机号码格式不正确'));
        } else {
            callback();
        }
    },

    /**
     * 身份证校验
     * @param rule
     * @param value
     * @param callback
     */
    validateIDcard(rule, value, callback) {
        let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (value === '') {
            callback(new Error('请输入身份证号码'));
        }else if(!reg.test(value)){
            callback(new Error('请确认您的身份证号码是否正确'));
        } else {
            callback();
        }
    },
    /**
     * 密码验证
     * @param rule
     * @param value
     * @param callback
     */
    validatePass(rule, value, callback) {
        let reg = /^[a-zA-Z]([a-zA-Z0-9]{5,20})$/;
        if (value === '') {
            callback(new Error('请输入密码'));
        }else if(!reg.test(value)){
            callback(new Error('请输入字母开头，英文和数字混合的6-20位数字'));
        } else {
            callback();
        }
    },

    /**
     * 银行卡号码验证
     * @param rule
     * @param value
     * @param callback
     */
    validateBank(rule, value, callback) {
        let reg = /^([1-9]{1})(\d{14}|\d{18}|\d{19})$/;
        if (value === '') {
            callback(new Error('请输入您的银行卡号'));
        }else if(!reg.test(value)){
            callback(new Error('请输入正确的银行卡位数'));
        } else {
            callback();
        }
    },

    /**
     * 验证数字+逗号+点
     */
    validateNumComma(rule, value, callback){
        let reg = /^[\d,.]*$/;
        if (value === '') {
            callback();
        }else if(!reg.test(value)){
            callback(new Error('请输入正确的格式！'));
        } else {
            callback();
        }
    },

    /**
     * 验证是否是数字类型和长度必须为10位
     */
    validateNumLength(rule, value, callback){
        let reg = /^[\d,.]*$/;
        if (value === '') {
            callback(new Error('不能为空！'));
        }else if(!reg.test(value) || value.length !== 10){
            callback(new Error('长度必须为10位且类型必须为数字！'));
        } else {
            callback();
        }
    },

    /**
     * 验证是否为十六进制数字和必填选项
     */
    validateNumHex(rule, value, callback){
        let reg = /^[\d,.]*$/;
        if (value === '') {
            callback(new Error('不能为空！'));
        }else if(!reg.test(value) || value.length !== 2){
            callback(new Error('读取位置为两位十六进制！'));
        } else {
            callback();
        }
    },

    /**
     * 验证所填字段是否为空|是否符合时间格式|
     */
    validateDateTime(rule, value, callback){
        if (value === '') {
            callback(new Error('不能为空！'));
        }else if (!isNaN(Date.parse(value))) {
            if (new Date(value) > new Date()) {
                callback();            //合法时间
            } else {
                callback(new Error('您输入的时间小于当前时间！'));
            }
        } else {
            callback(new Error('您输入的时间格式有问题！'));
        }
    },
    /**
     * 验证IP|
     */
    validateIP(rule, value, callback){
        if (value === '') {
            callback(new Error('不能为空！'));
        }else if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(value)) {
            value.split('.').every(function(num){
                //切割开来，每个都做对比，可以为0，可以小于等于255，但是不可以0开头的俩位数
                //只要有一个不符合就返回false
                if(num.length > 1 && num.charAt(0) === '0'){
                    //大于1位的，开头都不可以是‘0’
                    callback(new Error('IP开头都不可为“0”'));
                }else if(parseInt(num , 10) > 255){
                    //大于255的不能通过
                    callback(new Error('IP不可大于255！'));
                }
                callback();
            });
        } else {
            callback(new Error('请输入正确IP格式！'));
        }
    },
    /**
     * 验证Port 端口号|
     */
    validatePort(rule, value, callback){
        if (value === '') {
            callback(new Error('不能为空！'));
        }else if (/^(\d)+$/g.test(value)) {
            if(parseInt(value)<=65535&&parseInt(value)>=0){
                callback();
            }else{
                callback(new Error('端口号在0到65535范围内！'));
            }
        } else {
            callback(new Error('端口号为数字！'));
        }
    },
    /**
     * 验证是否包含大写字母和数字
     */
    validateNumUpperase(rule, value, callback){
        let reg = /([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*/;
        if (value === '') {
            callback(new Error('不能为空！'));
        }else if(!reg.test(value) && value.length !== 10){
            callback(new Error('必须包含大写字母和数字！'));
        } else {
            callback();
        }
    },
}