export const itemTemplates  = {
        link: (data) => `[${data.text}](${data.URL})\n\n`,
        image: (data) => `![${data.text}](${data.URL})\n\n`,
        text: (data) => `${data.text}\n\n`,
        code: (data) => `\`\`\`\n ${data.text} \n\`\`\` \n\n`,
        h1: (data) => `# ${data.text}\n\n`,
        h2: (data) => `## ${data.text}\n\n`,
        h3: (data) => `### ${data.text}\n\n`,
        h4: (data) => `#### ${data.text}\n\n`,
        h5: (data) => `##### ${data.text}\n\n`,
        h6: (data) => `###### ${data.text}\n\n`,
        quote: (data) => `> ${data.text}\n\n`,
        list: (data) => {
            let listString = '';
            data.listItems.forEach(element => {
                listString += `- ${element.text} \n`;
            });
            return listString;
        }
}    

export const sectionItemOptions = ["link", "image", "code", "h1", "h2", "h3", "h4", "h5", "h6", "text", "list", "quote"];

export const itemObjects = {
    h1: {type:"h1", inputType:"text", text:""},
    h2: {type:"h2",inputType:"text", text:""},
    h3: {type:"h3",inputType:"text", text:""},
    h4: {type:"h4",inputType:"text", text:""},
    h5: {type:"h5",inputType:"text", text:""},
    h6: {type:"h6",inputType:"text", text:""},
    text: {type:"text", inputType:"textarea", text:""},
    link: { type:"link", inputType:"text", URL: "", text:""},
    image: {type:"image", inputType:"text", URL:"", text:""},
    code: {type:"code", inputType:"textarea", text:""},
    quote: {type:"quote", inputType:"textarea", text:""},
    list: {type:"list", inputType:"list", listItems:[{text:""}]}
}

export const formObjects = {
        link: {
            name:"link",
                inputs: [ 
                { type:"text", visibleName: "Link Text",name: "text", placeholder:"Link Text" },
                { type:"text", visibleName: "Link URL", name: "URL", placeholder:"Link URL" }
            ]
        },
        image: {
            name:"image",
                inputs: [ 
                { type:"text", visibleName: "Image Text",name: "text", placeholder:"Image Text" },
                { type:"text", visibleName: "Image URL", name: "URL", placeholder:"Image URL" }
            ]
        },
        code: {
            name:"code",
                inputs: [ 
                { type:"textarea", visibleName: "Code", name: "codeText", placeholder:"Code" }//How to handle text area differently
            ]
        },
        header: {
            name:"header",
                inputs: [ 
                { type:"text", visibleName: "Header", name: "headerText", placeholder:"Header" }
            ]
        },
        text: {
            name: "text",
            inputs: [
                {type:"textarea", visibleName: "Text", name: "text"}
            ]
        },
        quote: {
            name: "quote",
            inputs: [
                {type:"textarea", visibleName: "Quote", name: "quote"}
            ]
        },
        list: {
            name: "list",
            inputs: [
                {type:"text", visibleName: "List Item", name: "listItem", placeholder:"List Item"}
            ]
        }
    }

//intro section
export const sampleData = 
    [ 
        {
            name:"Intro",
            items: [
                {   
                    type:"text",
                    text: "Learn Build Teach is a great platform"
                },
                {
                    type:"image",
                    URL:"www.jamesqquick.com",
                    text:"James Quick"
                },
                {   
                    type:"h1",
                    text: "H1 Header"
                },
            ]
        }
    
    ];