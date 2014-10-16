/**
 * Created by Mr.zhan on 14-10-16.
 * E-mail:mrzhanyouwei@163.com
 */
$(function(){
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        width : 200,
        height : 200
    });
    chrome.tabs.getSelected(function (tab){
        console.log(tab);
        qrcode.makeCode(tab.url);
    });
});