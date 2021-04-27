function onScanSuccess(qrCodeMessage) {
    console.log(qrCodeMessage);
    const text = CryptoJS.AES.decrypt(qrCodeMessage,"00000000000000000000005x8w5z6w8q")
    console.log(text);
}
var html5QrcodeScanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
var resultContainer = document.getElementById('reaader-result');
html5QrcodeScanner.render(onScanSuccess);

