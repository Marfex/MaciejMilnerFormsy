import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  person = new FormGroup({
    data: new FormGroup({
      firstName: new FormControl('', [
        Validators.pattern('[a-zA-Z Ł]*'),
        Validators.required,
      ]),
      lastName: new FormControl('', [
        Validators.pattern('[a-zA-Z Ł]*'),
        Validators.required,
      ]),

      e_mail: new FormControl('', [Validators.email, Validators.required]),
    }),

    telefon: new FormGroup({
      kier: new FormControl('', [Validators.pattern('')]),
      numers: new FormControl('', [Validators.minLength(9)]),
      wewn: new FormControl('', [Validators.pattern('')]),
      numerk: new FormControl('', [Validators.minLength(9)]),
    }),
    faktura: new FormGroup({
      firma: new FormControl('', [Validators.pattern('')]),
      pryw: new FormControl('', [Validators.pattern('')]),
    }),
  });

  onSubmit() {
    console.log(this.person);
  }
}
