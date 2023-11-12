import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {ConfigService} from "../config/config.service";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  private _apiKey: string;

  constructor(private readonly _configService: ConfigService) {
    this._apiKey = this._configService.config.apiKey;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith(environment.weatherApi.main)) {
      const modifiedParams: HttpParams = req.params.append('key', this._apiKey)
      // Clone the request with the modified parameters
      const modifiedRequest: HttpRequest<any> = req.clone({
        params: modifiedParams,
      });

      // Continue with the modified request
      return next.handle(modifiedRequest);
    }
    return next.handle(req);
  }
}
