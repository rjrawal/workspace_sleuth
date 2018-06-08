package com.example.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/service2")
public class Service2Controller {
	
	private static final Logger LOG = LoggerFactory.getLogger(Service2Controller.class);
	
	
	@GetMapping("/test")
	public String test() {
		LOG.info("you called service 2");
		return "service-2";
	}

}
