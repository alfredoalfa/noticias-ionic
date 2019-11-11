import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;

  constructor( private noticiasServices: NoticiasService ) {

  }

  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

  ngOnInit() {

    this.segment.value = this.categorias[0];

    this.noticiasServices.getTopHeadLinesCategoria(this.categorias[0])
    .subscribe(resp => {
      console.log(resp);
    });
  }
}
