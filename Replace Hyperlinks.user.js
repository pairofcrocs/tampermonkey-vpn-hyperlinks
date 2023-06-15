// ==UserScript==
// @name         Reverse Proxy/VPN Hyperlinks
// @namespace    https://discord.com/users/647319974989529088
// @version      1.0
// @description  Replaces hyperlinks containing a specified IP address with the base domain of the current page
// @match        http://*/*
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var ipAddressToReplace = '192.168.1.16';
    var currentBaseUrl = window.location.protocol + '//' + window.location.host;

    function replaceHyperlink(event) {
        var link = event.target;

        var url = link.href;
        if (url && url.startsWith('http://' + ipAddressToReplace)) {
            var relativePath = url.replace(new RegExp('^http://' + ipAddressToReplace), ''); // Remove 'http://ipAddressToReplace' prefix
            var newUrl = currentBaseUrl + relativePath;
            link.href = newUrl;
        }
    }

    document.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            replaceHyperlink(event);
        }
    });
})();
