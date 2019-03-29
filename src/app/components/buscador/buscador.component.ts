import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  texto: string;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.texto = params['texto'];
      this.heroes = this.heroesService.buscarHeroe(this.texto);
    });
  }

}
