!function(){function e(e){for(var t=e.replace(/^https?:\/\/|:\d{1,4}$/g,"").toLowerCase(),a=0,n=o.length;n>a;){if(t.match(o[a]))return!0;a++}return console.error("Spymaster: domain '"+t+"' is not allowed"),!1}function t(t){if(e(t.origin)){var o=JSON.parse(t.data);if("get"==o.action){var r=localStorage.getItem(o.key);t.source.postMessage(JSON.stringify({id:o.id,key:o.key,value:r}),t.origin)}else if("set"==o.action){localStorage.setItem(o.key,o.value);var r=localStorage.getItem(o.key);t.source.postMessage(JSON.stringify({id:o.id,key:o.key,value:r}),t.origin)}else"store_tracking_request"==o.action?a(o.object):"remove_tracking_request"==o.action&&n(o.object)}}function a(e){var t=localStorage.getItem("tracking_queue");t=t?JSON.parse(t):{},t[e.id]=e,t=JSON.stringify(t),localStorage.setItem("tracking_queue",t)}function n(e){var t=localStorage.getItem("tracking_queue");t&&(t=JSON.parse(t),delete t[e],t=JSON.stringify(t),localStorage.setItem("tracking_queue",t))}var o=[/^(.*\.)*(pedia)(\.(?:net|edu|com))*\.((?:vn|net))$/,/^(.*\.)*(edumall)(\.(?:net|edu|com))*\.((?:vn|net))$/,/^(.*\.)*(e2learn)(\.(?:net|edu|com))*\.((?:vn|net))$/,/^(.*\.)*(tudemy)\.((?:vn|net))$/,/^(.*\.)*(topica)\.((?:vn|net))$/,/^vuotquasohai\.com$/];window.addEventListener?window.addEventListener("message",t,!1):window.attachEvent&&window.attachEvent("onmessage",t)}();