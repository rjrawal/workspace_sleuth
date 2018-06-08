package com.example.demo.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@FeignClient("service-2")
@RequestMapping("/v1/service2")
public interface Service2 {
	@GetMapping("/test")
	public String test();
}
