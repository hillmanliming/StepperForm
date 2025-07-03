import { r as registerInstance, h } from './index-1jtv562_.js';
import { f as formDataStore, s as state } from './store-form-data-CuSxk1Cs.js';

const formStepperCss = ":host{display:block;box-sizing:border-box;margin:0;padding:0;height:100vh;--font-size-base:1.125rem;--line-height-base:1.625rem;--element-background:white;}h1,h2{margin:0}h3{margin-top:0}header{display:flex;flex-direction:column;background-color:var(--element-background);padding:0rem 20% 2rem 20%;box-shadow:0px 0px 4px -2px rgba(0, 0, 0, 0.4)}header img{width:550px;max-width:100%;justify-self:center;align-self:center}form{flex-grow:1}.form-stepper{display:flex;flex-direction:column;min-height:100vh}.container{display:flex;justify-content:start;gap:2rem;padding:2rem 20%;height:100%}.summary{background-color:var(--element-background);font-size:var(--font-size-base);line-height:var(--line-height-base);text-wrap:wrap;width:100%;height:100%}.summary ul{padding:0;margin:0}.summary li{list-style:none;padding:0.25rem 0;}.summary-item{display:grid;justify-content:space-between;gap:2rem;grid-template-columns:10rem 1fr;align-items:start;}.summary-content{padding:2rem}.confirmation{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);text-align:center}.confirmation img{width:50px;height:auto;margin-bottom:1rem;}@media screen and (max-width: 768px){header{padding:0 1rem 1rem 1rem;}.container,.stepper-status,.summary-content{padding:1rem;}.container{gap:1rem}.summary-item{grid-template-columns:1fr;gap:0.125rem;}.nav-buttons{padding:1rem;}.container{flex-direction:column;}}";

// Mapping van stappen naar verplichte velden
const stepFieldsMap = {
    0: ['Naam', 'Email'],
    1: ['Mobiele nummer', 'Werkervaring'],
    2: ['Woonplaats', 'Vervoersmiddel'],
    3: [],
};
// Bepaal het hoogste stapnummer
const maxStep = Object.keys(stepFieldsMap).length - 1;
const FormStepper = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    // Houdt bij welke velden geldig zijn
    validationStatus = {};
    // Houdt de ingevulde formuliervelden bij
    formData = {};
    submitted = false;
    // Luister naar wijzigingen in formuliervelden
    handleFieldChange(event) {
        const { name, valid, value, minlength } = event.detail;
        // Alleen valideren als de waarde lang genoeg is, of als er geen minlength is
        if (typeof minlength === 'number' && value && value.length < minlength) {
            this.validationStatus = { ...this.validationStatus, [name]: false };
        }
        else {
            this.validationStatus = { ...this.validationStatus, [name]: valid && (!value || value !== '0') };
        }
        this.formData = formDataStore.getAllFields();
    }
    // Handler voor het versturen van het formulier
    handleSubmit = () => {
        this.submitted = true;
    };
    // C`ontroleer of alle verplichte velden van de huidige stap geldig zijn
    isCurrentStepValid() {
        const requiredFields = stepFieldsMap[state.currentStep];
        return requiredFields.every(name => this.validationStatus[name]);
    }
    // Render het formulier en de stappen
    render() {
        if (this.submitted) {
            return (h("div", { class: "confirmation" }, h("img", { src: "assets/Checkmark.svg", alt: "Checkmark" }), h("h2", null, "Succesvol verzonden!")));
        }
        return (h("div", { class: "form-stepper" }, h("header", null, h("img", { src: "assets/Vaandel.png", alt: "Vaandel" }), h("h1", null, "Form Stepper Component"), h("h2", null, "Algemeen vooronderzoek")), h("div", { class: "container" }, h("stepper-status", null), h("form", { class: "form" }, h("form-step", { step: 0 }, h("form-field", { name: "Naam", label: "Voor- en achternaam", type: "text", value: "", placeholder: "Voor- en achternaam", required: true, "aria-required": "true", error: "Voer alstublieft een geldige naam in.", minlength: 2, maxlength: 30 }), h("form-field", { name: "Email", label: "Email", type: "email", value: "", placeholder: "Email", required: true, "aria-required": "true", error: "Voer alstublieft een geldig emailadres in.", minlength: 2, maxlength: 30 })), h("form-step", { step: 1 }, h("form-field", { name: "Mobiele nummer", label: "Mobiele nummer", pattern: "[0-9]+", type: "tel", value: "", placeholder: "Mobiele nummer", required: true, "aria-required": "true", error: "Voer alstublieft een geldig mobiel nummer in.", minlength: 2, maxlength: 10 }), h("form-field", { name: "Werkervaring", label: "Aantal jaar werkervaring", inputmode: "numeric", pattern: "[0-9]+", type: "text", value: "", placeholder: "Aantal jaar werkervaring", required: true, "aria-required": "true", error: "Voer alstublieft een geldig aantal jaren in.", minlength: 1, maxlength: 2 })), h("form-step", { step: 2 }, h("form-field", { name: "Woonplaats", label: "Woonplaats", type: "text", value: "", placeholder: "Woonplaats", required: true, "aria-required": "true", error: "Voer alstublieft een geldige woonplaats in.", minlength: 2, maxlength: 15 }), h("form-field", { label: "Vervoersmiddel", name: "Vervoersmiddel", type: "select", required: true, error: "Selecteer alstublieft een vervoersmiddel.", options: [
                { value: '0', label: '----- Selecteer optie -----' },
                { value: 'Openbaar vervoer', label: 'Openbaar vervoer' },
                { value: 'Eigen vervoer', label: 'Eigen vervoer' },
            ] })), h("form-step", { step: 3, class: state.currentStep === 3 ? 'summary' : '' }, h("div", { class: "summary-content" }, h("h3", null, "Samenvatting"), h("ul", null, Object.entries(this.formData).map(([key, value]) => (h("li", { class: "summary-item" }, h("strong", null, key, ":"), h("span", null, value))))))))), h("form-navigation", { currentStep: state.currentStep, maxStep: maxStep, disableNext: !this.isCurrentStepValid(), onSubmit: this.handleSubmit })));
    }
};
FormStepper.style = formStepperCss;

export { FormStepper as form_stepper };
//# sourceMappingURL=form-stepper.entry.esm.js.map

//# sourceMappingURL=form-stepper.entry.js.map