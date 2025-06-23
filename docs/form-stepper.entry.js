import { r as registerInstance, h } from './index-B-rzIFDu.js';
import { f as formDataStore, s as state } from './store-form-data-BVOf73t3.js';

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
        return (h("div", { key: 'fdf5706a15c9317769e4fd1d86b5977455f0e4e2', class: "form-stepper" }, h("header", { key: '8d21ba80253fdbb794648222ce1152a82b352211' }, h("h1", { key: '9ac95b6e1ec0f58b621f412ad53720cd1e813b05' }, "Form Stepper Component"), h("h2", { key: '3fba2dae5cd4882f26ceaa2716baeb6d6a6852d1' }, "Algemeen vooronderzoek")), h("div", { key: '7fe6f832ece75a7762f1a1a0b190578169d7a3d9', class: "container" }, h("stepper-status", { key: '8992ebd5b939b46f9d8f9c6f6c1cf86ce2335106' }), h("form", { key: 'e4bad414f4db6881f08435540d7b4848f66aec30', class: "form" }, h("form-step", { key: 'a8730d2f5b840431dbecf481e29a295668b6a02b', step: 0 }, h("form-field", { key: 'f401cc47c970711e576e7643166584b2ac95f3eb', name: "Naam", label: "Voor- en achternaam", type: "text", value: "", placeholder: "Voor- en achternaam", required: true, "aria-required": "true", error: "Voer alstublieft een geldige naam in.", minlength: 2, maxlength: 30 }), h("form-field", { key: '68ddc37b4197f9ecaf06ed6d51eeeba51900d5dc', name: "Email", label: "Email", type: "email", value: "", placeholder: "Email", required: true, "aria-required": "true", error: "Voer alstublieft een geldig emailadres in.", minlength: 2, maxlength: 30 })), h("form-step", { key: 'b383386dc87a8088463665a07fdf049241f477d7', step: 1 }, h("form-field", { key: 'e534cc8ec0af4bd696a86a411ee1b48737fcf88b', name: "Mobiele nummer", label: "Mobiele nummer", pattern: "[0-9]+", type: "tel", value: "", placeholder: "Mobiele nummer", required: true, "aria-required": "true", error: "Voer alstublieft een geldig mobiel nummer in.", minlength: 2, maxlength: 10 }), h("form-field", { key: 'cdf68c5804e3dcb252dd6484da67f6dc99c7254b', name: "Werkervaring", label: "Aantal jaar werkervaring", inputmode: "numeric", pattern: "[0-9]+", type: "text", value: "", placeholder: "Aantal jaar werkervaring", required: true, "aria-required": "true", error: "Voer alstublieft een geldig aantal jaren in.", minlength: 1, maxlength: 2 })), h("form-step", { key: '6945d33f147696b598498f51b8a2535c1f547a2a', step: 2 }, h("form-field", { key: '599b0850c735c34a339ef29c1eccd901d70c68d2', name: "Woonplaats", label: "Woonplaats", type: "text", value: "", placeholder: "Woonplaats", required: true, "aria-required": "true", error: "Voer alstublieft een geldige woonplaats in.", minlength: 2, maxlength: 15 }), h("form-field", { key: '1dae3ee82667f3532fc1b34bf0f283dd615cc691', label: "Vervoersmiddel", name: "Vervoersmiddel", type: "select", required: true, error: "Selecteer alstublieft een vervoersmiddel.", options: [
                { value: '0', label: '----- Selecteer optie -----' },
                { value: 'Openbaar vervoer', label: 'Openbaar vervoer' },
                { value: 'Eigen vervoer', label: 'Eigen vervoer' },
            ] })), h("form-step", { key: 'a703c45b02edb50af59074cda04e82b66f7434dc', step: 3, class: state.currentStep === 3 ? 'summary' : '' }, h("h3", { key: 'c96f68187dc7e31fd8278bf832bc3bef4c8de830' }, "Samenvatting"), h("ul", { key: '23dc3eb61175dba95ec5235c2b51721c60a948e7' }, Object.entries(this.formData).map(([key, value]) => (h("li", null, h("div", { class: "summary-item" }, h("strong", null, key, ":"), h("span", null, value))))))))), h("form-navigation", { key: 'f9623f83a67b55a86926399a2ead15cd802011c2', currentStep: state.currentStep, maxStep: maxStep, disableNext: !this.isCurrentStepValid() })));
    }
};
FormStepper.style = formStepperCss;

export { FormStepper as form_stepper };
//# sourceMappingURL=form-stepper.entry.esm.js.map

//# sourceMappingURL=form-stepper.entry.js.map