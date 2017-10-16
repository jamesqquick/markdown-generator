import { Injectable } from '@angular/core';
import { itemTemplates, sectionItemOptions, formObjects } from './../ItemData';


@Injectable()
export class MdGeneratorService {

  constructor() { }
    
  public buildMarkdownString(data):String{
        let retVal:String ="";
        data.forEach(element => {
            retVal += itemTemplates[element.type](element);
        });
        return retVal;
  }

}
