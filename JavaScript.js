function loadRequestedUrl() {
    let destination = document.getElementById('targetUrl').value.trim();
    if (!destination.startsWith('http://') && !destination.startsWith('https://')) {
        destination = 'https://' + destination;
    }

    const proxyActive = document.getElementById('vpnMode').checked;
    const frame = document.getElementById('app-frame');

    if (proxyActive) {
        printLog(`[STEALTH] Routing through proxy tunnel to bypass frame blocks...`);
        
        // This routes the traffic via a web wrapper that breaks out of X-Frame limits
        frame.src = "https://images" + "-opensocial.googleusercontent.com/gadgets/proxy?container=focus&url=" + encodeURIComponent(destination);
    } else {
        printLog(`[DIRECT] Loading via raw frame link...`);
        frame.src = destination;
    }
}