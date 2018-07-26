class resetView {
    listReset(){
        while (TodoView.todoListElement.firstChild) {
            TodoView.todoListElement.removeChild(TodoView.todoListElement.firstChild);
        }

    }

    solutionReset(){
        while (SolutionView.descriptionElement.firstChild) {
            SolutionView.descriptionElement.removeChild(SolutionView.descriptionElement.firstChild);

        }

        while (SolutionView.sampleElement.firstChild) {
            SolutionView.sampleElement.removeChild(SolutionView.sampleElement.firstChild);

        }

        while (SolutionView.linksElement.firstChild) {
            SolutionView.linksElement.removeChild(SolutionView.linksElement.firstChild);

        }
    }
}

let ResetView = new resetView();