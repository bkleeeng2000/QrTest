function onScanSuccess(qrCodeMessage) {
    resultContainer.innerText = qrCodeMessage;
}
var html5QrcodeScanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
var resultContainer = document.getElementById('reader-result');
html5QrcodeScanner.render(onScanSuccess);

