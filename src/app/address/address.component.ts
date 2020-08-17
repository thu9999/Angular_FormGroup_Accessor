import { Component, OnInit } from '@angular/core';
import { FormControl, ControlContainer } from '@angular/forms';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {

    addressGroup: FormControl = new FormControl('');

    constructor(
        public controlContainer: ControlContainer
    ) { }

    ngOnInit() {
        console.log(this.controlContainer.control.valueChanges.subscribe(console.log))
    }

}
