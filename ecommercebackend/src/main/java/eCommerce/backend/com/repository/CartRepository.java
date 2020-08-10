package eCommerce.backend.com.repository;

import eCommerce.backend.com.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



public interface CartRepository extends JpaRepository<Cart, Integer> {
}
