var autoproxy_host = {
    "google.com": 1,
    "twitter.com": 1
};
function FindProxyForURL(url, host) {
    var lastPos;
    do {
        if (autoproxy_host.hasOwnProperty(host)) {
            return 'SOCKS 192.168.3.60:10808';
        }
        
        lastPos = host.indexOf('.') + 1;
        host = host.slice(lastPos);
    } while (lastPos >= 1);
    return 'DIRECT';
}