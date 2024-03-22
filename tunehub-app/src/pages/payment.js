import axios from 'axios';
import React, { useEffect } from 'react';

export default function MakePayment() {
    useEffect(() => {
        const razorpayScript = document.createElement('script');
        razorpayScript.src = 'https://checkout.razorpay.com/v1/checkout.js';
        document.body.appendChild(razorpayScript);

        const jqueryScript = document.createElement('script');
        jqueryScript.src = 'https://code.jquery.com/jquery-3.5.1.min.js';
        document.body.appendChild(jqueryScript);

        const cssLink = document.createElement('link');
        cssLink.href = 'customer.css';
        cssLink.rel = 'stylesheet';
        document.head.appendChild(cssLink);

        return () => {
            document.body.removeChild(razorpayScript);
            document.body.removeChild(jqueryScript);
            document.head.removeChild(cssLink);
        };
    }, []);

    function handlePayment() {
        // Perform API request to create order
        fetch("http://localhost:8080/createOrder", {
            method: "POST"
        })
        .then(response => response.json())
        .then(order => {
            const options = {
                key: "rzp_test_XmwnchQOeOtvgY",
                amount: order.amount_due.toString(),
                currency: "INR",
                name: "Tune Hub",
                description: "Test Transaction",
                order_id: order.id,
                prefill: {
                    name: "Your Name",
                    email: "test@example.com",
                    contact: "9999999999"
                },
                notes: {
                    address: "Your Address"
                },
                theme: {
                    color: "#F37254"
                },
                handler: function (response) {
                    // Perform API request to verify payment
                    verifyPayment(response.razorpay_order_id, response.razorpay_payment_id, response.razorpay_signature);
                }
            };
            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        })
        .catch(error => console.error("Error:", error));
    }
    
    function verifyPayment(orderId, paymentId, signature) {
        // Perform API request to verify payment
        fetch("http://localhost:8080/verify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ orderId, paymentId, signature })
        })
        .then(response => response.json())
        .then(isValid => {
            if (isValid) {
                const email = sessionStorage.getItem('userEmail');
                axios.post('http://localhost:8080/payment-success', { email })
                alert("Payment successful");
                window.location.href = '/map-login';
            } else {
                alert("Payment failed");
                window.location.href = '/payment';
            }
        })
        .catch(error => console.error("Error:", error));
    }
    
    return (
        <div>
            <h1>Payment Gateway</h1>
            <button onClick={handlePayment}>Make Payment</button>
        </div>
    );
}
