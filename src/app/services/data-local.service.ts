import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from 'src/app/interfaces/interfaces';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Article[] = [];

  constructor(private storage: Storage, public toastController: ToastController) {
    this.cargarNoticia();
  }

  async presentToast(messege: string) {
    const toast = await this.toastController.create({
      message: messege,
      duration: 1500
    });
    toast.present();
  }

  guardarNoticia( noticia: Article ) {

    const existe = this.noticias.find( noti => noti.title === noticia.title );

    if ( !existe ) {
      this.noticias.unshift( noticia );
      this.storage.set('favoritos', this.noticias);
    }
    this.presentToast('Favorito Agregado.');
  }

  borrarNoticia(noticia: Article) {
    this.noticias = this.noticias.filter(noti => noti.title !== noticia.title);
    this.storage.set('favoritos', this.noticias);
    this.presentToast('Favorito Borrado.');
}

  async cargarNoticia() {

    const favoritos = await this.storage.get('favoritos');
    console.log('async await  ', favoritos);
    if ( favoritos ) {
      this.noticias = favoritos;
    }
  }
}
