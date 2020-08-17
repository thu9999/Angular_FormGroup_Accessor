import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'form-input';
    testFormGroup: FormGroup;

    constructor(
        private _fb: FormBuilder
    ) { 
        this.testFormGroup = this._fb.group({
            name: this._fb.control( '', [ Validators.required ]),
            age: this._fb.control( null, [ Validators.required, Validators.min(0) ]),
            address: this._fb.group({
                no: this._fb.control('441/22'),
                ward: this._fb.control('Ward 5'),
                district: this._fb.control('District 3')
            })
        })
    }

    ngOnInit() {
        this.testFormGroup.valueChanges.subscribe(console.log)
    }
}
