import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

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
  noticias: Article[] = [];

  ngOnInit() {
    this.loadCategory(this.categorias[0]);
  }

  changeCategory( event ) {
    console.log(event.detail.value);
    this.noticias = [];
    this.loadCategory( event.detail.value );
  }

  loadCategory( category: string) {
    this.noticiasServices.getTopHeadLinesCategoria( category )
        .subscribe(resp => {
          console.log(resp);
          this.noticias.push(...resp.articles );
        });
  }
}
