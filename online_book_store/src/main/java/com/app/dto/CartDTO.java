package com.app.dto;

import java.util.List;

public class CartDTO {
	private Long cartId;
    private List<BookDTO> books;
    private int totalBooks;
    private float totalPrice;
    private float discount;
//    private UserDTO userDTO;
	public CartDTO() {
		super();
	}
	
	public CartDTO(Long cartId, List<BookDTO> books, int totalBooks, float totalPrice, float discount) {
		super();
		this.cartId = cartId;
		this.books = books;
		this.totalBooks = totalBooks;
		this.totalPrice = totalPrice;
		this.discount = discount;
//		this.userDTO = userDTO;
	}
	public Long getCartId() {
		return cartId;
	}
	public void setCartId(Long cartId) {
		this.cartId = cartId;
	}
	public List<BookDTO> getBooks() {
		return books;
	}
	public void setBooks(List<BookDTO> books) {
		this.books = books;
	}
	public int getTotalBooks() {
		return totalBooks;
	}
	public void setTotalBooks(int totalBooks) {
		this.totalBooks = totalBooks;
	}
	public float getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(float totalPrice) {
		this.totalPrice = totalPrice;
	}
	public float getDiscount() {
		return discount;
	}
	public void setDiscount(float discount) {
		this.discount = discount;
	}
//	public UserDTO getUserDTO() {
//		return userDTO;
//	}
//	public void setUserDTO(UserDTO userDTO) {
//		this.userDTO = userDTO;
//	}
	
}
