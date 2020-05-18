import { LoadingController } from '@ionic/angular';

export class Page{
  public loading;
  constructor(public loadingController: LoadingController) {}

    protected formatar(data:string):string{
        let date = new Date(data).toLocaleDateString();
        return date;
      }

      async presentLoading() {
        this.loading =  await this.loadingController.create({
          message: 'Espere po favor...',
        });
         await this.loading.present();
         await this.loading.dismiss();
      }
}