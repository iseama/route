(function(){
	let id = location.pathname.split('/').slice(-1)[0];
    let mbot = /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent);
    if(id) {
        if(mbot) location.replace('https://blog.isolasi.xyz/'+id+'');
        else location.href = 'https://blog.isolasi.xyz/'+id+'';
    }
})();
