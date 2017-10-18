import { ElementServiceService } from './../../services/element-service.service';
import { MdGeneratorService } from './../../services/md-generator.service';
import { elementTemplates, elementItemOptions, elementObjects } from './../../ItemData';
import { Component, OnInit, Input } from '@angular/core';
import { DropEvent } from 'ng2-drag-drop';

@Component({
  selector: 'elements-list',
  templateUrl: './elements-list.component.html',
  styleUrls: ['./elements-list.component.css']
})


export class ElementsListComponent implements OnInit {

    @Input('preview') preview:String;

    elements:Array<any>;
    elementItems = elementItemOptions;

    constructor(private mdGeneratorService: MdGeneratorService, private elementServiceService: ElementServiceService) { }
    
    ngOnInit() {
        //TODO Call Service to get elements
        this.elements = this.elementServiceService.getElements();
        this.updatePreview();
    }

    getMarkdownString(){
        this.mdGeneratorService.buildMarkdownString(this.elements);
    }

    addElement(elementItem){
        this.elements = this.elementServiceService.addElement(elementItem);
    }

    updatePreview(){
        this.getMarkdownString();
    }

    elementPropertyChanged(event, item, property){
        //TODO Call Service to update element        
        item[property] = event;
        this.updatePreview();
    }

    addListItem(listElement){
        this.elements = this.elementServiceService.addListItem(listElement);
        this.updatePreview();
    }

    deleteItem(element){
        this.elements = this.elementServiceService.deleteElement(element);
        this.updatePreview();
    }

    duplicateElement(element){
        this.elements = this.elementServiceService.duplicateElement(element);
        this.updatePreview();
    }

    //Drag and Drop
    dropElement(e: DropEvent, dropIndex){
        this.elements = this.elementServiceService.reorderElementsOnDrop(e.dragData, dropIndex);
        //Update Preview
        this.updatePreview();
    }

}
