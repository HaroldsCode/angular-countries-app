import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class ServerErrorInterceptorInterceptor implements HttpInterceptor {

  constructor(private readonly alert:NotificationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 404 ) this.alert.showAlert('Not Found', "We couldn't find a contry with the partial name given.");
        return throwError(err)
      }),
    );
  }
}
