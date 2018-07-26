class fetchSolutionController {
    setEventListener(){
        let elms = document.querySelectorAll(".stepB > .selectable > li");

        for (let i = 0; i < elms.length; i++) {
            elms[i].addEventListener(pointerEvent,FetchSolutionModule.getSolution);
        }
    }
}

let FetchSolutionController  = new fetchSolutionController();