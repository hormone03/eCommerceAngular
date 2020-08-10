package eCommerce.backend.com.service;

import eCommerce.backend.com.entity.ProductInOrder;
import eCommerce.backend.com.entity.User;


public interface ProductInOrderService {
    void update(String itemId, Integer quantity, User user);
    ProductInOrder findOne(String itemId, User user);
}
