import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Article[] = [];

  constructor(private storage: Storage) {
    this.cargarNoticia();
  }

  guardarNoticia( noticia: Article ) {

    const existe = this.noticias.find( noti => noti.title === noticia.title );

    if ( !existe ) {
      this.noticias.unshift( noticia );
      this.storage.set('favoritos', this.noticias);
    }
  }

  async cargarNoticia() {
    // this.storage.get('favoritos')
    //     .then( favoritos => {
    //       console.log('favoritos', favoritos);
    //     });
    const favoritos = await this.storage.get('favoritos');
    console.log('async await  ', favoritos);
    if ( favoritos ) {
      this.noticias = favoritos;
    }
  }
}
