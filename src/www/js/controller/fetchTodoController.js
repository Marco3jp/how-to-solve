class fetchTodoController {
    setEventListener(){
        let elms = document.querySelectorAll(".stepA > .selectable > li");

        for (let i = 0; i < elms.length; i++) {
            elms[i].addEventListener(pointerEvent,FetchTodoModule.getTodo);
        }
    }
}

let FetchTodoController  = new fetchTodoController();