import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
    titulo: "Davi Rodrigues",
    data: "December 5, 1996",
    descricao: "Vários servidores Git autenticam usando chaves públicas SSH. Para fornecer uma chave pública, cada usuário no seu sistema deve gerar uma se eles ainda não a possuem.",
    qtd_likes: 8,
    qtd_comments: 2,
    time_comment: "2h ago"
  }
  public lista_filmes = new Array<any>();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MoovieProvider
    ) {
  }
  public somaDoisNumeros(num1:number, num2:number): void{
    //alert(num1+num2);
  }


  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
        data => {
            const response = (data as any);
            const objeto_retorno = JSON.parse(response._body);
            this.lista_filmes = objeto_retorno.results;
            console.log(objeto_retorno);
        },error => {
            console.log(error);
        }
    )
  }

}
