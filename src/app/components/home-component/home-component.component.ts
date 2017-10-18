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
    showTutorial:boolean = true;

    currentImageIndex:number = 0;
    tutorialImages = [
        {src:'start.png', alt: "Getting Started"},
        {src:'add.png', alt: "Add Elements"},
        {src:'edit.png', alt: "Edit Elements"},
        {src:'preview.png', alt: "Preview"},
        {src:'markdown.png', alt: "View Markdown"},
        {src:'clipboard.png', alt: "Copy Markdown to clipboard"}];

    tutorialTexts = [
        "Welcome to Markdown Generator.  Let's get started!",
        "1. Click one of the labels above (h1, h2, etc.) to add elements to your page.",
        "2. Click the pencil icon of an element to edit its content.",
        "3. Once you've finished editing, click on the Preview tab to see what it will look like.",
        "4. You can also click on the Markdown tab to take a look at the generated markdown.",
        "5. When you're done, click the clipboard icon to copy the generated markdow.",
        "Let's get started!"
    ]
    
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

    nextSlide(){
        if(this.currentImageIndex < this.tutorialTexts.length -1)
            this.currentImageIndex ++;
    }

    previousSlide(){
        if(this.currentImageIndex > 0)
            this.currentImageIndex --;
    }
}

enum Tabs {
    PREVIEW,
    EDIT,
    MARKDOWN
}

