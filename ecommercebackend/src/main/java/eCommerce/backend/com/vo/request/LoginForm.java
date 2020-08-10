package eCommerce.backend.com.vo.request;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


@Data
public class LoginForm {
    @NotBlank
    private String username;
    @NotBlank
    private String password;
}
