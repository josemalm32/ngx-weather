import { Injectable } from '@angular/core';
import {ConfigModel} from "../../models/config.model";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public config: ConfigModel ={
    apiKey: ''
  };
  constructor() { }
}
