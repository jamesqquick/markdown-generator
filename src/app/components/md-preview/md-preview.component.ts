import { Component, OnInit, Input } from '@angular/core';
import {markdown} from 'markdown';

@Component({
  selector: 'md-preview',
  templateUrl: './md-preview.component.html',
  styleUrls: ['./md-preview.component.css']
})
export class MdPreviewComponent implements OnInit {

    @Input() preview:String;
    
    constructor() { }
    
    ngOnInit() {
        this.convertMDToHTML();
    }

    convertMDToHTML(){
        return markdown.toHTML(this.preview);
    }
}
