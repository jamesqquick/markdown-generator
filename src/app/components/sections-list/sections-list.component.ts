import { MdGeneratorService } from './../../services/md-generator.service';
import { sampleData, itemTemplates, sectionItemOptions, formObjects, itemObjects } from './../../ItemData';
import { Component, OnInit } from '@angular/core';
import { DropEvent } from 'ng2-drag-drop';

@Component({
  selector: 'sections-list',
  templateUrl: './sections-list.component.html',
  styleUrls: ['./sections-list.component.css']
})


export class SectionsListComponent implements OnInit {

    tabs = Tabs;
    tab;
    elements = [{type:"h1", inputType:"text", text:""}, {type:"h2", inputType:"text", text:""}];
    preview:String = "";
    elementItems = sectionItemOptions;

    constructor(private mdGeneratorService: MdGeneratorService) { }
    
    ngOnInit() {
        this.updatePreview();
        this.tab = this.tabs.SOURCE
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

    //Drag and Drop
    dropElement(e: DropEvent, dropIndex){
        const dragIndex = e.dragData;
        //get copy of dragged element
        const draggedItem = this.elements[dragIndex];
        //splice the dragged element out of array
        this.elements.splice(dragIndex, 1);
        //Insert dragged item into array at new position
        this.elements.splice(dropIndex, 0, draggedItem);
    }

}

enum Tabs {
    PREVIEW,
    SOURCE
}
