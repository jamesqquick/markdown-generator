import { MdGeneratorService } from './../../services/md-generator.service';
import { sampleData, itemTemplates, sectionItemOptions, formObjects, itemObjects } from './../../ItemData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sections-list',
  templateUrl: './sections-list.component.html',
  styleUrls: ['./sections-list.component.css']
})
export class SectionsListComponent implements OnInit {

    elements = [];
    preview:String = "";
    elementItems = sectionItemOptions;

    constructor(private mdGeneratorService: MdGeneratorService) { }
    
    ngOnInit() {
        this.updatePreview();
    }

    getMarkdownString(){
        this.preview = this.mdGeneratorService.buildMarkdownString(this.elements);
    }

    addElement(elementItem){
        this.elements.push({ ...itemObjects[elementItem]} );
    }

    updatePreview(){
        this.getMarkdownString();
    }

    elementPropertyChanged(event, item, property){
        item[property] = event;
        this.updatePreview();
    }

    addListItem(item){
        if(item.listItems){
            item.listItems.push({text:""});
        }
        this.updatePreview();
    }

    deleteItem(array, item){
        console.log(array);
        var index = array.indexOf(item);
        if(index > -1) {
            array.splice(index, 1);
        }
        this.getMarkdownString();
        this.updatePreview();
        
    }

}
