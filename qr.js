function onScanSuccess(qrCodeMessage) {
    console.log(qrCodeMessage);
}
var html5QrcodeScanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
var resultContainer = document.getElementById('reaader-result');
html5QrcodeScanner.render(onScanSuccess);