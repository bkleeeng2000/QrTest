function onScanSuccess(qrCodeMessage) {
    html5QrcodeScanner.clear();
    resultContainer.innerText = qrCodeMessage;
    fetch("http://bkleeeng2000.iptime.org:3000/crypto", {
        method: "Post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({text: qrCodeMessage})
    }).then((response) => {
        response.text()
            .then((text) => {
                console.log(text)
                decryptContainer.innerText = qrCodeMessage;
            })
    });
}
var html5QrcodeScanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
var resultContainer = document.getElementById('reader-result');
var decryptContainer = document.getElementById('decrypt-result');
html5QrcodeScanner.render(onScanSuccess);

