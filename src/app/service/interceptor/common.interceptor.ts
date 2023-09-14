import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { OtherService } from '../other/other.service';
import { LoadingController, LoadingOptions } from '@ionic/angular';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {

  constructor(private other:OtherService, private loadingCtrl:LoadingController) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingCtrl.create({
      message: 'Loading...',
    }).then(loading=>{
      loading.present();
    });
    return next.handle(request).pipe(
      finalize(() => this.loadingCtrl.dismiss()),
      catchError((err: any) => {
        if (err.error) {
          console.log(err.error);
          this.other.presentToast(err.error.message, 'danger');
        }
        return throwError(err);
      })
    );
  }
}
