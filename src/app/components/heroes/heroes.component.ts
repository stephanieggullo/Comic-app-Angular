import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[];
  constructor( private heroesService: HeroesService ) {
    console.log('servicio!!');
  }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

}
