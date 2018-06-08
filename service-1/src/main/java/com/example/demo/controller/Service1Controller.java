package com.example.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.demo.feign.Service2;

@RestController
@RequestMapping("/v1/service1")
public class Service1Controller {
	private static final Logger LOG = LoggerFactory.getLogger(Service1Controller.class);
	
	@Autowired
	private Service2 service2;
	
	@GetMapping("/test")
	public String test() {
		LOG.info("you called service 1");
		return "service-1";
	}
	
	@Bean
	public RestTemplate getRestTemplate() {
	    return new RestTemplate();
	}


	@RequestMapping("/callhome")
	public String callHome() {
	    return service2.test();
	}

}
