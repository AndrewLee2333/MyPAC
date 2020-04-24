function FindProxyForURL(url, host)
{
    url  = url.toLowerCase();
    host = host.toLowerCase();
 
    if (isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
        isInNet(dnsResolve(host), "172.16.0.0",  "255.240.0.0") ||
        isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0") ||
        isInNet(dnsResolve(host), "127.0.0.0", "255.255.255.0"))
        return "DIRECT";
 
    if (shExpMatch(url,"*twitter*")  ||
        shExpMatch(url,"*facebook*") ||
        shExpMatch(url,"*blogspot*") ||
        shExpMatch(url,"*youtube*") ||
       )
    {
       return "SOCKS 192.168.3.60:10808; DIRECT";
    }