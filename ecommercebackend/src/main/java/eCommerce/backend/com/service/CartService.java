package eCommerce.backend.com.service;

import eCommerce.backend.com.entity.Cart;
import eCommerce.backend.com.entity.ProductInOrder;
import eCommerce.backend.com.entity.User;

import java.util.Collection;


public interface CartService {
    Cart getCart(User user);

    void mergeLocalCart(Collection<ProductInOrder> productInOrders, User user);

    void delete(String itemId, User user);

    void checkout(User user);
}
