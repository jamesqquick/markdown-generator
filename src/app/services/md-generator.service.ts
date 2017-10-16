import { Injectable } from '@angular/core';
import { itemTemplates, sectionItemOptions, formObjects } from './../ItemData';


@Injectable()
export class MdGeneratorService {

  constructor() { }
    
  public buildMarkdownString(data):String{
        
        let retVal:String ="";
        data.forEach(section => {
            retVal += `# ${section.name} \n\n --- \n\n`;
            if(section.items) {
                section.items.forEach( item => {
                    if(itemTemplates[item.type]){
                        retVal += itemTemplates[item.type](item);
                    }
                })
            }
        });
        return retVal;
  }

}
