import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  constructor() { }

  @Input() formObj;

    public simpleForm = {
        name:"link",
                inputs: [ 
                { type:"text", visibleName: "Link Text",name: "linkText", placeholder:"Link Text" },
                { type:"text", visibleName: "Link URL", name: "linkUrl", placeholder:"Link URL" }
        ]
    }
    
    temp = {
        linkText:"",
        linkUrl:""
    }

  submit(){
      console.log("Submitted");
  }

  ngOnInit() {
  }

}
