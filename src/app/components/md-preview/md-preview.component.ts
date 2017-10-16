import { Component, OnInit, Input } from '@angular/core';
import {markdown} from 'markdown';

@Component({
  selector: 'md-preview',
  templateUrl: './md-preview.component.html',
  styleUrls: ['./md-preview.component.css']
})
export class MdPreviewComponent implements OnInit {

    isCopied:boolean = false;
    @Input() preview:String;
    
    constructor() { }
    
    ngOnInit() {
        this.convertMDToHTML();
    }

    convertMDToHTML(){
        return markdown.toHTML(this.preview);
    }

    successfulCopy(){
        this.isCopied = true;
        setTimeout(() => {
            this.isCopied = false;
            console.log(this.isCopied);
        }, 500)
    }

}
