export function resizeListener (){
    let designSize = 1920;
    let html = document.documentElement;
    let clientW = html.clientWidth;
    let htmlRem = (clientW * 16) / designSize;
    html.style.fontSize = htmlRem + 'px';
}

