import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  textoInput: string = '';

  constructor( private router: Router) { }

  ngOnInit() {
  }

  buscarHeroe() {
    console.log(this.textoInput);
    this.router.navigate( ['/buscar', this.textoInput]);
    this.textoInput = '';
  }

}
