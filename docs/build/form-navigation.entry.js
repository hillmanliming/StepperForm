import { r as registerInstance, h } from './index-epPAJl59.js';
import { f as formDataStore } from './store-form-data-CQ17Q7qP.js';

const formNavigationCss = ":host{display:block;position:fixed;bottom:0;right:0;width:100%;z-index:10;}.nav-buttons{display:flex;justify-content:flex-end;gap:1rem;padding:2rem 20%;background-color:white}.primary-button,.sec-button{min-width:7rem;padding:1rem;font-size:1.125rem;line-height:1.625rem;cursor:pointer;border:none;outline:none}.primary-button:focus-visible,.sec-button:focus-visible{outline:2px dashed black;outline-offset:1px}.primary-button:focus-visible{background-color:#00729f}.sec-button:focus-visible{background-color:#99cae8}.primary-button{background-color:#007bc7;color:white}.primary-button:hover{background-color:#00729f}.primary-button:active{background-color:#004977}.primary-button:disabled{background-color:#e6e6e6;color:#999999;cursor:default}.sec-button{background-color:#cce4f3;color:black}.sec-button:hover{background-color:#99cae8}.sec-button:active{background-color:#007bc7}.sec-button:disabled{background-color:#f3f3f3;color:#999999;cursor:default}@media screen and (max-width: 768px){.nav-buttons{padding:1rem;}}";

const FormNavigation = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    // Huidige stap (wordt als prop doorgegeven)
    currentStep;
    // Hoogste stapnummer
    maxStep;
    // Of de volgende knop uitgeschakeld moet zijn
    disableNext;
    // Zet de huidige stap in de store
    goToStep(step) {
        formDataStore.setCurrentStep(step);
    }
    // Handler voor het versturen van het formulier
    handleSubmit() {
        alert('Formulier is verstuurd!');
    }
    render() {
        // Controleer of dit de laatste stap is
        const isLastStep = this.currentStep === this.maxStep;
        return (h("div", { key: '4cd65331339b77d7dc7c5fb1cc2d8b93b8f41480', class: "nav-buttons" }, h("button", { key: 'd79d2faad6859341ca75dfa2554c2b6c535ca899', class: "sec-button", type: "button", onClick: () => this.goToStep(this.currentStep - 1), disabled: this.currentStep === 0 }, "Vorige"), h("button", { key: '9c8533ec6297a6ad0f392cd9d86879e69544d94e', class: "primary-button", type: "button", onClick: () => (isLastStep ? this.handleSubmit() : this.goToStep(this.currentStep + 1)), disabled: this.disableNext }, isLastStep ? 'Versturen' : 'Volgende')));
    }
};
FormNavigation.style = formNavigationCss;

export { FormNavigation as form_navigation };
//# sourceMappingURL=form-navigation.entry.esm.js.map

//# sourceMappingURL=form-navigation.entry.js.map