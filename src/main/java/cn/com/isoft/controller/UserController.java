package cn.com.isoft.controller;

import cn.com.isoft.service.UseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

	@Autowired
	UseService useService;


	@GetMapping("/hello")
	public String hello(){
		return useService.he();
	}
}
