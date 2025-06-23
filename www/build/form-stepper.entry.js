import { r as registerInstance, h } from './index-epPAJl59.js';
import { f as formDataStore, s as state } from './store-form-data-CQ17Q7qP.js';

const formStepperCss = ":host{display:block;position:relative;box-sizing:border-box;margin:0;padding:0;height:100vh}:root{--background:#f9f9f9;--blue:#007bc7;--input-border:#000000;--sublabel:#999999;--red:#e73629;--pri-btn-hover:#00729f;--pri-btn-active:#004977;--pri-btn-disabled:#e6e6e6;--sec-btn-default:#cce4f3;--sec-btn-hover:#99cae8;--sec-btn-active:#007bc7;--sec-btn-disabled:#f3f3f3;--padding:2rem 15rem}h1,h2{margin:0}h3{margin-top:0}header{background-color:white;padding:2rem 20%;box-shadow:0px 0px 4px -2px rgba(0, 0, 0, 0.4)}.form-stepper{display:flex;flex-direction:column}.container{display:flex;justify-content:start;align-items:start;gap:2rem;padding:2rem 20%;height:100%}stepper-status{display:flex;justify-content:center;flex-direction:column;gap:2rem}.summary{background-color:white;font-size:1.125rem;line-height:1.625rem;padding:2rem;min-width:20rem;text-wrap:wrap}.summary ul{padding:0;margin:0}.summary li{list-style:none;padding:0.25rem 0;}.summary-item{display:grid;gap:1.25rem;grid-template-columns:10rem 1fr;align-items:start;word-wrap:break-word;}.summary-item span{overflow-wrap:break-word;word-break:break-word}@media screen and (max-width: 768px){header,.container,.summary{padding:1rem;}.nav-buttons{padding:1rem;}}";

const stepFieldsMap = {
    0: ['Naam', 'Email'],
    1: ['Mobiele nummer', 'Werkervaring'],
    2: ['Woonplaats', 'Vervoersmiddel'],
    3: [],
};
const maxStep = Object.keys(stepFieldsMap).length - 1;
const FormStepper = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    validationStatus = {};
    formData = {};
    handleFieldChange(event) {
        const { name, valid, value } = event.detail;
        this.validationStatus = { ...this.validationStatus, [name]: valid && (!value || value !== '0') };
        this.formData = formDataStore.getAllFields();
    }
    isCurrentStepValid() {
        const requiredFields = stepFieldsMap[state.currentStep];
        return requiredFields.every(name => this.validationStatus[name]);
    }
    render() {
        return (h("div", { key: 'a0f4b1ab085066d261fb158caca110ac0f984799', class: "form-stepper" }, h("header", { key: '5f0f7a8b54873b92cd1169a52571f8a9ffed6b1f' }, h("h1", { key: '2c97e02fbbfb32975cc414f9a9a2811a2e288b8c' }, "Form Stepper Component"), h("h2", { key: '62220c3793ee9cc030da613acf143b15657a6ed4' }, "Algemeen vooronderzoek")), h("div", { key: '9dc4fb0cf7db902da677f79c53b3b726a904c83e', class: "container" }, h("stepper-status", { key: '755bca92145c0ba2c6cf7fcd75bb858abf53eea7' }), h("form", { key: '6b580d419a9b990a4559e3fefa73c5552062dc69', class: "form" }, h("form-step", { key: 'ca12b7dcb570abd53555fc3563b599c0c3eebe7a', step: 0 }, h("form-field", { key: '53e82c9fa301966c99a0e093714b895fce03abe0', name: "Naam", label: "Voor- en achternaam", type: "text", value: "", placeholder: "Voor- en achternaam", required: true, "aria-required": "true", error: "Voer alstublieft een geldige naam in.", minlength: 2, maxlength: 30 }), h("form-field", { key: '8d6664530bb4fe108cf3e9dde6d47eb782a8ade0', name: "Email", label: "Email", type: "email", value: "", placeholder: "Email", required: true, "aria-required": "true", error: "Voer alstublieft een geldig emailadres in.", minlength: 2, maxlength: 30 })), h("form-step", { key: '5275fa264e7581e217b85e6290d5fe132b0d6dee', step: 1 }, h("form-field", { key: '6344ac7017e4e866b197999591583e2cbbf08a99', name: "Mobiele nummer", label: "Mobiele nummer", pattern: "[0-9]+", type: "tel", value: "", placeholder: "Mobiele nummer", required: true, "aria-required": "true", error: "Voer alstublieft een geldig mobiel nummer in.", minlength: 2, maxlength: 10 }), h("form-field", { key: 'c849e117edc413c609853815e80c63367d2b0005', name: "Werkervaring", label: "Aantal jaar werkervaring", inputmode: "numeric", pattern: "[0-9]+", type: "text", value: "", placeholder: "Aantal jaar werkervaring", required: true, "aria-required": "true", error: "Voer alstublieft een geldig aantal jaren in.", minlength: 1, maxlength: 2 })), h("form-step", { key: '9f1681825844c2d2174dcbc4486378d4de9a109a', step: 2 }, h("form-field", { key: '25afe26dce10e3749ab34f7f35b8706ba1d9d146', name: "Woonplaats", label: "Woonplaats", type: "text", value: "", placeholder: "Woonplaats", required: true, "aria-required": "true", error: "Voer alstublieft een geldige woonplaats in.", minlength: 2, maxlength: 15 }), h("form-field", { key: 'ef9430cbc0435d081db7007e04c1db057bef9b79', label: "Vervoersmiddel", name: "Vervoersmiddel", type: "select", required: true, error: "Selecteer alstublieft een vervoersmiddel.", options: [
                { value: '0', label: '----- Selecteer optie -----' },
                { value: 'Openbaar vervoer', label: 'Openbaar vervoer' },
                { value: 'Eigen vervoer', label: 'Eigen vervoer' },
            ] })), h("form-step", { key: '78d2033e12712ad8a9bedf32a153ef9454f445c3', step: 3, class: state.currentStep === 3 ? 'summary' : '' }, h("h3", { key: '963cad1c403a663925b8ebd83349a53f26596a3d' }, "Samenvatting"), h("ul", { key: '7c75b1cc3e877de68a12073f893db91e577400b9' }, Object.entries(this.formData).map(([key, value]) => (h("li", null, h("div", { class: "summary-item" }, h("strong", null, key, ":"), h("span", null, value))))))))), h("form-navigation", { key: 'ce896ec1d1241d8f0a169293559daaafa3ec36c0', currentStep: state.currentStep, maxStep: maxStep, disableNext: !this.isCurrentStepValid() })));
    }
};
FormStepper.style = formStepperCss;

export { FormStepper as form_stepper };
//# sourceMappingURL=form-stepper.entry.esm.js.map

//# sourceMappingURL=form-stepper.entry.js.map