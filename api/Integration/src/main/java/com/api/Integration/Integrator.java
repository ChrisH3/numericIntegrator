package com.api.Integration;

public class Integrator
{
	public Integrator(String funcStr) throws ScriptException
	{

	}

	public double integrate(String method, double a, double b)
	{
		switch (method)
		{
			case "Simpson's Method":
				return simpsons(a, b);
			case "Romberg Method":
				return romberg(a, b, 0.01, 20);
			case "Gaussian Quadrature":
				return gaussianQuadrature(a, b, 100);
			case "Adaptive Quadrature":
				return adaptiveQuadrature(a, b, 0.01);
		}

		return 0;
	}


	// Temporarily hard coded function to test the api
	private double f(double x)
	{
		return 2*x + 3;
	}




	private double simpsons(double a, double b)
	{
		double h = (b - a) / 2;
		return (h/3) * (f(a) + 4*f(a+h) + f(b));
	}


	private double romberg(double a, double b, double tol, int maxsteps)
	{
		double[][] r = new double[maxsteps][maxsteps];
		double h = b - a;
		r[0][0] = (h/2) * (f(a) + f(b));

		for(int i = 1; i < maxsteps; i++)
		{
			r[i][0] = r[i-1][0];
			for(int k = 1; k < Math.pow(2, i-1); k++)
				r[i][0] += h * f(a + (k - 0.5) * h);
			r[i][0] *= 0.5;

			for(int j = 1; j <= i; j++)
				r[i][j] = r[i][j-1] + ((r[i][j-1] - r[i-1][j-1]) / (Math.pow(4, j) - 1));
	
			h *= 0.5;

			if(Math.abs(r[i][i] - r[i-1][i-1]) < tol)
				return r[i][i];
		}
		return r[maxsteps-1][maxsteps-1];
	}


	/*
	Function used for calculating Gaussian quadrature
	It is the function you would integrate after doing a change of variables to change the bounds of integration to -1 and 1
	x, a, b should lie between min and max x values used to create the spline
	*/
	private double g(double x, double a, double b)
	{
		return f(((b-a)*x + (b+a)) / 2) * ((b-a) / 2);
	}

	double gaussianQuadrature(double a, double b, int numSteps)
	{

		double gaussianRoot = Math.sqrt(3.0) / 3.0;
		double area = 0;
		double dx = (b-a) / numSteps;
		
		for(int i = 0; i < numSteps; i++) {
			area += g(-gaussianRoot, i*dx, (i+1)*dx) + g(gaussianRoot, i*dx, (i+1)*dx);
		}
		return area;
	}


	/*
	Adaptive Quadrature
	uses Simpson's rule to calculate area
	recursively divides the interval until it is within a given tolerance
	*/
	private double adaptiveQuadrature(double a, double b, double tol)
	{
		double h = (b - a) / 2.0;
		double sab = simpsons(a, b);
		double sah = simpsons(a, a+h);
		double shb = simpsons(a+h, b);

		if(Math.abs(sab - sah - shb) < 10*tol)
			return sah + shb;
		else
			return adaptiveQuadrature(a, a+h, tol/2.0) + adaptiveQuadrature(a+h, b, tol/2.0);
	}
}