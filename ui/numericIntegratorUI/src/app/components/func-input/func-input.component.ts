import { IntegrationService } from './../../services/integration.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-func-input',
	templateUrl: './func-input.component.html',
	styleUrls: ['./func-input.component.css']
})
export class FuncInputComponent implements OnInit {

  public output: string = "";
	public function: string = "";
  public a: string = "";
  public b: string = "";
	public showOptions: boolean = true;
	public integrationOption: string = "";
	public integrationOptions: string[] = [
		"Simpson's Method",
		"Romberg Method",
		"Gaussian Quadrature",
		"Adaptive Quadrature"
	];


	constructor(private integrationService :IntegrationService) { }

	ngOnInit(): void {
	}


	public onFunctionChange() {
		console.log(this.function)
	}

	public onButtonClick() {
    this.integrationService.integrate(this.function, this.a, this.b, this.integrationOption).subscribe((response) => {
      this.output = "" + response;
    });
	}
}
