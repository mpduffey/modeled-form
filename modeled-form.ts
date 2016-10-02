import {Component, Input}		from '@angular/core';
import {KeysPipe}						from 'modules/keys-pipe/keys-pipe';

@Component({
	selector:			'modeled-form',
	template:			`
		<form class="form-horizontal">
			<form-input [parentIsArray]="isArray(formObject)" *ngFor="let prop of formObject | keys" [property]="prop"></form-input>
			<form-input *ngIf="isArray(formObject)" (addArrayItem)="add($event)" [button]="true" [parentIsArray]="isArray(formObject)" [property]="{key: 'New', value: null}"></form-input>
		</form>
	`,
	pipes: 				[KeysPipe],
	styles:				[`
		form {max-width: 600px;}
	`]
})

export class ModeledForm {
	@Input() formObject;

	isArray = (val) => {return Array.isArray(val);}
	add = (x) => {
		this.formObject.push(x);
	}
}