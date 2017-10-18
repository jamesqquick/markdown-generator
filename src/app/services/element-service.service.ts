import { Injectable } from '@angular/core';
import {  elementObjects } from './../ItemData';

@Injectable()
export class ElementServiceService {

    elements = [];
    constructor() { }

    getElements() {
        return this.elements;
    }

    addElement(elementItem){
        var newElement = {... elementObjects[elementItem]};
        if(elementItem === 'list'){
            newElement.listItems = [];
        }
        this.elements.push( newElement );
        return this.elements;
    }

    elementPropertyChanged(event, item, property){
        //TODO Call Service to update element        
        item[property] = event;
    }

    deleteElement(item){
        console.log(item);
        var index = this.elements.indexOf(item);
        console.log("Index", index);
        if(index > -1) {
            this.elements.splice(index, 1);
        }
        return this.elements;
    }

    addListItem(listElement){
        if(listElement.listItems){
            listElement.listItems.push({text:""});
        }
        return this.elements;
    }

    reorderElementsOnDrop(dragIndex, dropIndex){

        //get copy of dragged element
        const draggedItem = this.elements[dragIndex];
        //splice the dragged element out of array
        this.elements.splice(dragIndex, 1);
        //Insert dragged item into array at new position
        this.elements.splice(dropIndex, 0, draggedItem);
        return this.elements;
    }

}
