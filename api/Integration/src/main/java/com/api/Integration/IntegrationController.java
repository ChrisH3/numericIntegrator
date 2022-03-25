
package com.api.Integration;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
@RequestMapping("/integrate")
@CrossOrigin(origins = "http://localhost:4200")
public class IntegrationController
{
	@GetMapping("")
	public Double integrate(@RequestParam(value="function", defaultValue = "") String function,
	                       @RequestParam(value="method", defaultValue = "") String method)
	{
		Integrator integrator = new Integrator(function);
		return integrator.integrate(method, 0, 1);
	}
}
