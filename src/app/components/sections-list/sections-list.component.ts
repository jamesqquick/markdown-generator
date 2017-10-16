import { MdGeneratorService } from './../../services/md-generator.service';
import { sampleData, itemTemplates, sectionItemOptions, formObjects, itemObjects } from './../../ItemData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sections-list',
  templateUrl: './sections-list.component.html',
  styleUrls: ['./sections-list.component.css']
})
export class SectionsListComponent implements OnInit {

    sections = [];
    preview:String = "";
    sectionItems = sectionItemOptions;

    constructor(private mdGeneratorService: MdGeneratorService) { }
    
    ngOnInit() {
        this.updatePreview();
    }

    getMarkdownString(){
        //console.log(this.sections);
        this.preview = this.mdGeneratorService.buildMarkdownString(this.sections);
        //console.log(this.preview);
    }

    addSection(){
        this.sections.push({name: `Section ${this.sections.length}`, items: []});
        this.updatePreview();
        
    }

    addSectionItem(section, item) {
        section.items.push({...itemObjects[item]});
        console.log(section.items);
        this.getMarkdownString();
    }

    updatePreview(){
        this.getMarkdownString();
    }

    itemPropertyChanged(event, item, property){
        //console.log(event, item, property);
        item[property] = event;
        this.updatePreview();
    }



    addListItem(item){
        console.log(item);
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
