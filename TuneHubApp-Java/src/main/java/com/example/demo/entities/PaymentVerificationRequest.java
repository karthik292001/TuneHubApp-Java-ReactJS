package com.example.demo.entities;

public class PaymentVerificationRequest {
	String orderId;
    String paymentId;
    String signature;
	public PaymentVerificationRequest() {
		super();
	}
	public PaymentVerificationRequest(String orderId, String paymentId, String signature) {
		super();
		this.orderId = orderId;
		this.paymentId = paymentId;
		this.signature = signature;
	}
	public String getOrderId() {
		return orderId;
	}
	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}
	public String getPaymentId() {
		return paymentId;
	}
	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}
	public String getSignature() {
		return signature;
	}
	public void setSignature(String signature) {
		this.signature = signature;
	}
	@Override
	public String toString() {
		return "PaymentVerificationRequest [orderId=" + orderId + ", paymentId=" + paymentId + ", signature="
				+ signature + "]";
	}
      
    
}
