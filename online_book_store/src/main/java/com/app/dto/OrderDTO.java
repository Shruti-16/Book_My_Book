package com.app.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import com.app.entities.DeliveryStatus;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@ToString
public class OrderDTO {
	
	@NotNull
	private Long userId;
	@Min(value = 0, message = "Price should not be less than 0")
	private float price;
	@NotNull
	private Long cartId;
	@JsonIgnore
	private LocalDate orderDate;
	private DeliveryStatus deliveryStatus;
	
	public OrderDTO() {
		super();
	}

	public OrderDTO(@NotNull Long userId, @Min(value = 0, message = "Price should not be less than 0") float price,
			@NotNull Long cartId) {
		super();
		this.userId = userId;
		this.price = price;
		this.cartId = cartId;
		this.orderDate = LocalDate.now();
		this.deliveryStatus = DeliveryStatus.ORDERED;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public Long getCartId() {
		return cartId;
	}

	public void setCartId(Long cartId) {
		this.cartId = cartId;
	}

	public LocalDate getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(LocalDate orderDate) {
		this.orderDate = orderDate;
	}

	public DeliveryStatus getDeliveryStatus() {
		return deliveryStatus;
	}

	public void setDeliveryStatus(DeliveryStatus deliveryStatus) {
		this.deliveryStatus = deliveryStatus;
	}
	

}
