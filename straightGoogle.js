/*
 * Name: Remove Google Redirection
 *
 * Description:
 * 
 * Prohibit click-tracking, and prevent url redirection when clicks on the 
 * result links in Google search page.
 */

/*
 * Let the user scripts or content scripts running in an annoymous function,
 * that is more safer.
 */
(function (window) {
    "use strict";

    /*
     * Inject the function into current document and run it
     */
    function injectFunction(func) {
        var ele = document.createElement('script');
        var s = document.getElementsByTagName('script')[0];

        ele.type = 'text/javascript';
        ele.textContent = '(' + func + ')();';

        s.parentNode.insertBefore(ele, s);
    }

    /*
     * Disable the url rewrite function
     */
    function disableURLRewrite() {
        function inject_init() {
            /* Define the url rewrite function */
            Object.defineProperty(window, 'rwt', {
                value: function() { return true; },
                writable: false, // set the property to read-only
                configurable: false
            });
        }

        injectFunction(inject_init);
    }

    /*
     * Clean the link, no track and no url redirection
     */
    function cleanTheLink(a) {
        if (a.dataset['cleaned'] == 1) // Already cleaned
            return;

        /* Set clean flag */
        var need_clean = false;

        /* Find the original url */
        var result = /\/(?:url|imgres).*[&?](?:url|q|imgurl)=([^&]+)/i.exec(a.href);

        if (result) {
            need_clean = true;
            a.href = result[1]; // Restore url to original one
        }

        /* Remove the onmousedown attribute if found */
        var val = a.getAttribute('onmousedown') || '';

        if (val.indexOf('return rwt(') != -1) {
            need_clean = true;
            a.removeAttribute('onmousedown');
        }

        /* FIXME: check the link class name */
        var cls = a.className || '';

        if (cls.indexOf('irc_') != -1) need_clean = true;

        /*
         * Remove all event listener added to this link
         */
        if (need_clean) {
            var clone = a.cloneNode(true);
            a.parentNode.replaceChild(clone, a);
            clone.dataset['cleaned'] = 1;
        }
    }

    /*
     * The main entry
     */
    function main()
    {
        disableURLRewrite();

        document.addEventListener('mouseover', function (event) {
            var a = event.target, depth = 1;

            /* Found the target link, and try to clean it */
            while (a && a.tagName != 'A' && depth-- > 0)
                a = a.parentNode;

            if (a && a.tagName == 'A')
                cleanTheLink(a);
        }, true);
    }

    var test_host;
    test_host = window.location.hostname;
    if(test_host.indexOf('facebook')||test_host.indexOf('google.com')>0||test_host.indexOf('youtube.com')>0){
        main();//here
    }
})(window);

/*
javascript:(function(win,kw,imgs){var random =  Math.floor((Math.random() * 1000) + 1); var kwparam = (kw!=='')?'kw='+kw+'&':'';var imgSrcs = []; for (var i = 0; i < Math.min(33, imgs.length); i++) {if(imgs[i].src.substr(0,4)=='http' && (imgs[i].src.split('.').pop().substr(0,3)=='jpg'||imgs[i].src.split('.').pop().substr(0,3)=='png'||imgs[i].src.split('.').pop().substr(0,4)=='jpeg')){imgSrcs.push(imgs[i].src);}}win.open('https://sps.mailomix.com/?'+kwparam+'imgs='+encodeURIComponent(JSON.stringify(imgSrcs))+'&utm_source=603d5e31-4021-491f-720e-aee4c781f131','stock-photo-search ' + random,'width=500,height=600,left='+(win.screenX+(win.outerWidth-500)/2)+',top='+(win.screenY+(win.outerHeight-740)/2)); })(window,getSelection?getSelection().toString():'',document.getElementsByTagName('img'));
*/
