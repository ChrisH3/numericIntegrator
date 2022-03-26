package com.api.Integration;

import java.util.Map;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.databind.ObjectMapper;


public class Data
{
	public String function;
	public String a;
	public String b;
	public String method;
	public Map<String, String> settings;

	@JsonCreator
	public Data(String function, String a, String b, String method, String settings)
	{
		this.function = function;
		this.a = a;
		this.b = b;
		this.method = method;

		ObjectMapper mapper = new ObjectMapper();
		try {
			this.settings = mapper.readValue(settings, Map.class);
		} catch (Exception e) {
		}
	}
}
