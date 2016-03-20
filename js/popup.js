/**
 * Created by Mr.zhan on 14-10-16.
 * E-mail:zhanyouwei@icloud.com
 */
$(function () {

	var qrcode = new QRCode(document.getElementById("qrcode"), {
		width: 200,
		height: 200
	});
	chrome.tabs.getSelected(function (tab) {
		qrcode.makeCode(tab.url);
	});
});