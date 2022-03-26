import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-func-output',
	templateUrl: './func-output.component.html',
	styleUrls: ['./func-output.component.css']
})
export class FuncOutputComponent implements OnInit {

	@Input()
	public value: string = "";

	constructor() { }

	ngOnInit(): void {
	}

}
