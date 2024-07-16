        function showPaymentOptions(paymentMethod) {
            var challanPayment = document.getElementById('challan_payment');
            var onlinePayment = document.getElementById('online_payment');

            if (paymentMethod === 'Challan') {
                challanPayment.style.display = 'block';
                onlinePayment.style.display = 'none';
            } else if (paymentMethod === 'Online') {
                challanPayment.style.display = 'none';
                onlinePayment.style.display = 'block';
            } else {
                challanPayment.style.display = 'none';
                onlinePayment.style.display = 'none';
            }
        }

        function submitForm() {
            window.location.href = 'page1.html';
        }
