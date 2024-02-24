"use strict";
var ProjectInput = /** @class */ (function () {
    function ProjectInput() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.querySelector('#app');
        var importedNode = document.importNode(this.templateElement.content, true);
        this.formElement = importedNode.firstElementChild;
        this.formElement.id = 'user-input';
        this.titleInputElement = this.formElement.querySelector('#title');
        this.descriptionInputElement = this.formElement.querySelector('#description');
        this.peopleInputElement = this.formElement.querySelector('#people');
        this.configure();
        this.attach();
    }
    ProjectInput.prototype.submitHandler = function (event) {
        var _a;
        event.preventDefault();
        console.log((_a = this.titleInputElement) === null || _a === void 0 ? void 0 : _a.value);
    };
    ProjectInput.prototype.configure = function () {
        this.formElement.addEventListener('submit', this.submitHandler.bind(this));
    };
    ProjectInput.prototype.attach = function () {
        this.hostElement.insertAdjacentElement('afterbegin', this.formElement);
    };
    return ProjectInput;
}());
var prjInput = new ProjectInput();
//# sourceMappingURL=app.js.map