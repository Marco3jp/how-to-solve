class solutionView {
    constructor(){
        this.descriptionElement = document.querySelector(".description-wrapper");
        this.sampleElement = document.querySelector(".samples");
        this.linksElement = document.querySelector(".links");
    }

    displayAll(solution){
        if(solution.description){
            this.displayDescription(solution.description);
        }else{
            this.displayDescription("Sorry. I have not written an description yet.");
        }

        if(solution.link !== null){
            this.displayLinks(solution.link);
        }
        if(solution.example !== null){
            this.displayExample(solution.example);
        }
    }

    displayDescription(description){
        this.descriptionElement.textContent = description;
    }

    displayLinks(links){
        for (let i = 0; i < links.length; i++) {
            let newElement = document.createElement("li");
            let newLink = document.createElement("a");
            newLink.setAttribute("href",links[i]);
            newLink.textContent = links[i];
            newElement.appendChild(newLink);
            this.linksElement.appendChild(newElement);
        }
    }

    displayExample(samples){
        for (let i = 0; i < samples.length; i++) {
            let newElement = document.createElement("li");
            let newWrapper = document.createElement("div");
            if(samples[i].type==="link"){
                let newLink = document.createElement("a");
                newLink.setAttribute("href",samples[i].example_content);
                newLink.textContent = samples[i].example_content;
                newWrapper.classList.add("sample-link-wrapper");
                newWrapper.appendChild(newLink);
                newElement.appendChild(newWrapper);
                this.sampleElement.appendChild(newElement);
            }else if(samples[i].type==="code"){
                let newCode = document.createElement("code");
                newCode.textContent = samples[i].example_content;
                newWrapper.classList.add("sample-code-wrapper");
                newWrapper.appendChild(newCode);
                newElement.appendChild(newWrapper);
                this.sampleElement.appendChild(newElement);
            }
        }
    }
}

let SolutionView = new solutionView();