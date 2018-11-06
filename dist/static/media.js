(function (doc, win) {
        var docEl = doc.documentElement;
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 50 * (clientWidth / 375) + 'px';
        };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    }(document,window));

//(function (doc, win) {
//var docEl = win.document.documentElement;
//var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
//var metaEl = doc.querySelector('meta[name="viewport"]');
//var dpr = 0;
//var scale = 0;
// 
//// 对iOS设备进行dpr的判断，对于Android系列，始终认为其dpr为1
//if (!dpr && !scale) {
//  var isAndroid = win.navigator.appVersion.match(/android/gi);
//  var isIPhone = win.navigator.appVersion.match(/[iphone|ipad]/gi);
//  var devicePixelRatio = win.devicePixelRatio;
// 
//  if(isIPhone) {
//    dpr = devicePixelRatio;
//  } else {
//    drp = 1;
//  }
//  
//  scale = 1 / dpr;
//}
// 
// 
//docEl.setAttribute('data-dpr', dpr);
//// 动态改写meta:viewport标签
//if (!metaEl) {
//  metaEl = doc.createElement('meta');
//  metaEl.setAttribute('name', 'viewport');
//  metaEl.setAttribute('content', 'width=device-width, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
//  document.documentElement.firstElementChild.appendChild(metaEl);
//} else {
//  metaEl.setAttribute('content', 'width=device-width, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
//}
// 
//})(document, window);



