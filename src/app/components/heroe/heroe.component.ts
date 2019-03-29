import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute, private heroeService: HeroesService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this.heroeService.getHeroe( params ['id'] );
    }
    );
  }

}
