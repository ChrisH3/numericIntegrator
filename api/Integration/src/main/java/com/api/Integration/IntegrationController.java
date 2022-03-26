
package com.api.Integration;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.Map;


@RestController
@RequestMapping("/integrate")
@CrossOrigin(origins = "http://localhost:4200")
public class IntegrationController
{
	@GetMapping("")
	// public Double integrate(@RequestParam(value="function", defaultValue = "") String function,
	//                         @RequestParam(value="a", defaultValue = "") String a,
	//                         @RequestParam(value="b", defaultValue = "") String b,
	//                         @RequestParam(value="method", defaultValue = "") String method,
	//                         @RequestParam(value="settings") Map<String,Object> settings)
	public Double integrate(Data data)
	{
		Integrator integrator = new Integrator(data.function);
		return integrator.integrate(data.method, Double.parseDouble(data.a), Double.parseDouble(data.b), data.settings);
	}
}
