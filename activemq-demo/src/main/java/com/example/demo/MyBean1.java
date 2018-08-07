package com.example.demo;

import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Component;

@Component
public class MyBean1 {

	@JmsListener(destination = "topic1")
	public void processMessage(String content) {
		System.out.println("**********************2***************************");
		System.out.println(content);
	}

}