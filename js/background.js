///**
// * Created by Mr.zhan on 14-10-16.
// * E-mail:mrzhanyouwei@163.com
// */
//chrome.tabs.onSelectionChanged.addListener(function (tabId) {
//    chrome.pageAction.show(tabId);
//});
//chrome.tabs.onCreated.addListener(function (tab) {
//    chrome.pageAction.show(tab.id);
//});
//chrome.tabs.onActive.addListener(function (activeInfo) {
//    chrome.pageAction.show(activeInfo.tabId);
//});
//chrome.tabs.onReplaced.addListener(function (addedTabId, removedTabId) {
//    chrome.pageAction.show(addedTabId);
//});
//chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//    chrome.pageAction.show(tab.id);
//});
//
//chrome.tabs.onDetached.addListener(function (tabId, detachInfo) {
//    chrome.pageAction.show(tabId);
//});
//chrome.tabs.onAttached.addListener(function (tabId, attachInfo) {
//    chrome.pageAction.show(tabId);
//});
//
////chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
//////    lastTabId = tabs[0].id;
////    chrome.pageAction.show(tabs[0].id);
////});