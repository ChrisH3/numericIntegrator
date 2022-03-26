import { KeyValue } from '@angular/common';
import { Component, Input, OnInit, EventEmitter, Output, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-integration-settings',
	templateUrl: './integration-settings.component.html',
	styleUrls: ['./integration-settings.component.css']
})
export class IntegrationSettingsComponent implements OnInit {

	@Input()
	public method: string = "";

	@Output()
	public updateSettings: EventEmitter<any> = new EventEmitter();

	public settings: any = {};


	constructor() {
	}

	ngOnInit(): void {
	}


	ngOnChanges(changes: SimpleChanges): void {
		if(changes['method']) {
			switch(this.method) {
				case "Simpson's Method":
					this.settings = {
						numSteps: '1'
					}
					break;
				case "Romberg Method":
					this.settings = {
						tolerance: '0.01',
						maxIterations: '20'
					}
					break;
				case "Gaussian Quadrature":
					this.settings = {
						numSteps: '1'
					}
					break;
				case "Adaptive Quadrature":
					this.settings = {
						tolerance: '0.01'
					}
					break;
			}

			this.updateSettings.emit(this.settings);
		}
	}


	public onSettingsChange(key: any, value: any) {
		this.settings[key] = value;
		this.updateSettings.emit(this.settings);
	}
}
