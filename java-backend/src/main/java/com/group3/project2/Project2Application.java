package com.group3.project2;

import java.util.TimeZone;
import javax.annotation.PostConstruct;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@SpringBootApplication
@EnableScheduling
public class Project2Application {

	public static void main(String[] args) {
		SpringApplication.run(Project2Application.class, args);
	}
	
	@PostConstruct
	public void init() {
	  TimeZone.setDefault(TimeZone.getTimeZone("UTC"));
	}
	

	
	@Bean
	public WebMvcConfigurer corsConfigurer() {
	  return new WebMvcConfigurer() {
	    @Override
//	    public void addCorsMappings(CorsRegistry registry) {
//	      registry.addMapping("/**").allowedMethods();
//	    }
//	  };
	    
	    public void addCorsMappings(CorsRegistry registry) {
          registry.addMapping("/**").allowedMethods("GET","POST", "PUT", "PATCH", "DELETE",
                "OPTIONS").allowedOrigins("*").allowedHeaders("*");
	}};
	}
	
	@Bean public Docket project2Api() {
	  return new Docket(DocumentationType.SWAGGER_2).select().apis(RequestHandlerSelectors.basePackage("com.group3.project2")).build();
	}
}
