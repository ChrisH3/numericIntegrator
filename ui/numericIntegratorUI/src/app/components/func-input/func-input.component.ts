import { IntegrationService } from './../../services/integration.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-func-input',
	templateUrl: './func-input.component.html',
	styleUrls: ['./func-input.component.css']
})
export class FuncInputComponent implements OnInit {

	public function: string = "";
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
		console.log("Integrate!")
		console.log(this.function);
		console.log(this.integrationOption);

    this.integrationService.integrate(this.function, this.integrationOption).subscribe((response) => {
      console.log(response);
    });
	}
}
