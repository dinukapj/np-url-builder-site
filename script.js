document.getElementById('generateBtn').addEventListener('click', function () {
    var tenantUrl = document.getElementById('tenantUrl').value;
    var tier = document.getElementById('tier').value;
    var period = document.getElementById('period').value;
    var promoCode = document.getElementById('promoCode').value.toUpperCase();

    var generatedUrl = 'https://app.ninjapipe.com/purchase-plan/' + tenantUrl + '/' + tier + '/' + period;
    if (promoCode) {
        generatedUrl += '?promo=' + promoCode;
    }
    document.getElementById('generatedUrl').textContent = generatedUrl;
});

document.getElementById('copyBtn').addEventListener('click', function () {
    var url = document.getElementById('generatedUrl').textContent;
    navigator.clipboard.writeText(url).then(() => {
        const Toast = Swal.mixin({
            toast: true,
            position: "bottom-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer; 
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Link Copied!"
        });
    });
});
