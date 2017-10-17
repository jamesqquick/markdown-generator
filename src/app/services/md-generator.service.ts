import { Injectable } from '@angular/core';
import { elementTemplates } from './../ItemData';
import  {Subject} from 'rxjs/Subject';


@Injectable()
export class MdGeneratorService {

  constructor() { }
  previewSubject = new Subject<String>();
  
    
  public buildMarkdownString(data):String{
        let retVal:String ="";
        data.forEach(element => {
            retVal += elementTemplates[element.type](element);
        });
        //Notify components of change to markdown string
        this.previewSubject.next(retVal);
        
        return retVal;
  }

}
