export function resizeListener (){
    // 定义设计图的尺寸 3840
    let designSize = 1920;
    // 获取 html 元素
    let html = document.documentElement;
    // 定义窗口的宽度
    let clientW = html.clientWidth;
    let clienH = html.clientHight;
    // html 的fontsize 大小
    let htmlRem = (clientW * 16) / designSize;
    html.style.fontSize = htmlRem + 'px';
}

