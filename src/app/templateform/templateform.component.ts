import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css'],
})
export class TemplateformComponent implements OnInit {
  dane = {
    imie: '',
    nazwisko: '',
    email: '',
    telefonStacjonarnyKierunkowy: '',
    telefonStacjonarny: '',
    telefonStacjonarnyWewnetrzny: '',
    telefonKomorkowy: '',
    odbiorca: '',
  };

  OnSubmit() {
    if (
      this.dane.nazwisko.length < 3 ||
      this.dane.telefonKomorkowy.length != 9
    ) {
      alert('Nie oszukuj gagatku');
    } else {
      console.log(this.dane);
    }
  }
  constructor() {}

  ngOnInit() {}
}
