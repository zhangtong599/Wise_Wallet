(function(window){var svgSprite='<svg><symbol id="icon-send" viewBox="0 0 1024 1024"><path d="M938.448 321.538l-260.505 203.29c-4.115 4.176-9.742 6.355-15.308 6.355-2.905 0-5.75-0.546-8.413-1.634-8.109-3.42-13.01-11.286-13.01-20.09v-121.69c-278.658 0-400.468 78.392-381.952 328.125C141.263 316.424 367.82 226.08 641.212 226.08V102.03c0-8.804 4.901-16.7 13.071-20.06 8.046-3.39 17.487-1.421 23.659 4.72l260.564 204.198c8.473 8.441 8.473 22.239-0.058 30.65zM780.391 812.894c0 36.732-29.955 66.563-66.746 66.563H212.969c-36.851 0-66.745-29.831-66.745-66.563V313.428c0-36.76 29.893-66.592 66.745-66.592l77.274-0.121 100.087-66.473H212.97c-73.583 0-133.49 59.757-133.49 133.186v499.466c0 73.4 59.907 133.187 133.49 133.187h500.676c73.582 0 133.488-59.786 133.488-133.187V460.291l-66.743 66.594v286.009h0.001z m0 0"  ></path></symbol><symbol id="icon-wallet" viewBox="0 0 1024 1024"><path d="M832.36132813 344.80247107H210.09570287l-3.95507812-14.50195286c-9.22851588-31.640625 6.59179662-65.25878906 36.25488332-78.44238307L639.88085963 75.19797915C655.70117213 67.94700233 674.15820313 67.28782289 690.63769505 73.87961952s29.66308594 18.457031 36.91406276 34.93652368L832.36132813 344.80247107z m-588.6474612-39.55078125h527.34375026L691.29687525 124.63645571c-2.6367185-6.59179662-7.91015625-11.20605494-14.50195363-13.84277345-6.59179662-2.6367185-13.84277344-2.6367185-20.43457006 0.65917945L258.875 288.1130177c-7.91015625 3.29589869-12.52441381 9.88769531-15.16113307 17.13867212z" fill="#323232" ></path><path d="M832.36132813 344.80247107H136.26757812v-32.95898464c0-61.96289037 50.097656-112.06054713 112.06054713-112.06054637h111.40136694L639.88085963 75.19797915C655.70117213 67.94700233 674.15820313 67.28782289 690.63769505 73.87961952s29.66308594 18.457031 36.91406276 34.93652368L832.36132813 344.80247107zM175.81835937 305.25168982h595.23925782L691.29687525 124.63645571c-2.6367185-6.59179662-7.91015625-11.20605494-14.50195363-13.84277345-6.59179662-2.6367185-13.84277344-2.6367185-20.43457006 0.65917945L368.29882787 239.33372131H248.32812525c-37.57324219 0-68.55468775 29.0039065-72.50976588 65.91796851z" fill="#323232" ></path><path d="M834.99804662 858.96262732H189.00195338c-29.0039065 0-52.73437525-23.73046875-52.73437525-52.73437526V305.25168982h698.73046849c29.0039065 0 52.73437525 23.73046875 52.73437526 52.73437526v448.24218698c0 29.0039065-23.73046875 52.73437525-52.73437526 52.73437526zM175.81835937 344.80247107v461.42578099c0 7.25097682 5.93261719 13.18359399 13.18359401 13.18359402h645.99609324c7.25097682 0 13.18359399-5.93261719 13.18359401-13.18359402V357.98606508c0-7.25097682-5.93261719-13.18359399-13.18359401-13.18359401H175.81835937z" fill="#323232" ></path><path d="M719.64160156 680.98411171c-30.98144557 0-56.03027318-25.04882838-56.03027318-56.03027319v-79.1015625c0-30.98144557 25.04882838-56.03027318 56.03027318-56.03027395s56.03027318 25.04882838 56.03027319 56.03027395v79.1015625c0 30.98144557-25.04882838 56.03027318-56.03027319 56.03027317z m0-151.61132839c-9.22851588 0-16.47949193 7.25097682-16.47949193 16.4794927v79.1015625c0 9.22851588 7.25097682 16.47949193 16.47949193 16.47949193s16.47949193-7.25097682 16.47949194-16.47949193v-79.1015625c0-9.22851588-7.25097682-16.47949193-16.47949194-16.4794927zM347.47534154 307.70383825l369.36474609-157.28027317 15.49072318 36.38671875-369.35815456 157.28027317z" fill="#323232" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)