import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[];
  constructor(private heroesService: HeroesService, private router: Router) {
  }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

  HeroeDetail(index) {
    this.router.navigate(['/heroe', index]);
  }

}
