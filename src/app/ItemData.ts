export const elementTemplates  = {
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

export const elementItemOptions = ["link", "image", "code", "h1", "h2", "h3", "h4", "h5", "h6", "text", "list", "quote"];

export const elementObjects = {
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
    list: {type:"list", inputType:"list"}
}