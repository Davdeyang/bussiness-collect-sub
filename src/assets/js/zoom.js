import $   from 'jquery'
class zoom {
    constructor(){
    }
    resizeFunc(){
        let vm = this;
        vm.setZoom();     //初始化触发
        /**
         * 当浏览器窗口大小发生变化时触发
         */
        $(window).bind('resize',function(){
            vm.setZoom();
        });
    }
    setZoom(obj){
        obj = obj||$('.x_main');
        let w = $(window).width();
        let h = $(window).height();
        let maxWidth = 1920;
        let maxHeight = 1080;
        window.zoom = 1;

        if(h>w+150){
            // zoom = w/maxWidth;
            // obj.css({zoom:zoom});
            // $(".aside").css({zoom:zoom});
        }else{
            zoom = h/maxHeight;
            if(w/h>3&&w/maxWidth>2){
                zoom += 1;
            }
            obj.css({zoom:zoom});
        }
    }
}
export default new zoom();