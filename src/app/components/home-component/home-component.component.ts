import { MdGeneratorService } from './../../services/md-generator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

    preview:String ="";
    tabs = Tabs;
    tab;
    isCopied:boolean = false;
    
    
    constructor(private mdGeneratorService: MdGeneratorService) { }

    ngOnInit() {
        this.tab = this.tabs.EDIT;

        //Listen for changes to preview string
        this.mdGeneratorService.previewSubject.subscribe( (updatedPreview) =>  {
            this.preview = updatedPreview;
        })
    }

    successfulCopy(){
        this.isCopied = true;
        setTimeout(() => {
            this.isCopied = false;
            console.log(this.isCopied);
        }, 500)
    }

}

enum Tabs {
    PREVIEW,
    EDIT,
    MARKDOWN
}

