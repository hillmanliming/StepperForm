import { r as registerInstance, h } from './index-1jtv562_.js';
import { f as formDataStore } from './store-form-data-CuSxk1Cs.js';

const formNavigationCss = ":host{display:block;margin-top:auto;--primary-button-hover:#00729f;--secondary-button-hover:#99cae8;--disabled-button-text-color:#999999;--font-size-base:1.125rem;--line-height-base:1.625rem}.nav-buttons{display:flex;justify-content:flex-end;gap:1rem;padding:2rem 20%;background-color:white}.primary-button,.secondary-button{min-width:7rem;padding:1rem;font-size:var(--font-size-base);line-height:var(--line-height-base);cursor:pointer;border:none;outline:none}.primary-button:focus-visible,.secondary-button:focus-visible{outline:2px dashed black;outline-offset:1px}.primary-button:focus-visible{background-color:var(--primary-button-hover)}.secondary-button:focus-visible{background-color:var(--secondary-button-hover)}.primary-button{background-color:#007bc7;color:white}.primary-button:hover{background-color:var(--primary-button-hover)}.primary-button:active{background-color:#004977}.primary-button:disabled{background-color:#e6e6e6;color:var(--disabled-button-text-color);cursor:default}.secondary-button{background-color:#cce4f3;color:black}.secondary-button:hover{background-color:var(--secondary-button-hover)}.secondary-button:active{background-color:#007bc7}.secondary-button:disabled{background-color:#f3f3f3;color:var(--disabled-button-text-color);cursor:default}@media screen and (max-width: 768px){.nav-buttons{padding:1rem;}}";

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
    // Handler voor het versturen van het formulier
    onSubmit;
    // Zet de huidige stap in de store
    goToStep(step) {
        formDataStore.setCurrentStep(step);
    }
    render() {
        // Controleer of dit de laatste stap is
        const isLastStep = this.currentStep === this.maxStep;
        return (h("div", { key: '7594070ab9d90da90e014c4d1f979ae02de96d4d', class: "nav-buttons" }, h("button", { key: 'c153ad5fb39c52af67956c661a967ec8fbba223a', class: "secondary-button", type: "button", onClick: () => this.goToStep(this.currentStep - 1), disabled: this.currentStep === 0 }, "Vorige"), h("button", { key: '9f5a71c070d2ff4029d775812e086ed20b1ae3e8', class: "primary-button", type: "button", onClick: () => (isLastStep ? this.onSubmit() : this.goToStep(this.currentStep + 1)), disabled: this.disableNext }, isLastStep ? 'Versturen' : 'Volgende')));
    }
};
FormNavigation.style = formNavigationCss;

export { FormNavigation as form_navigation };
//# sourceMappingURL=form-navigation.entry.esm.js.map

//# sourceMappingURL=form-navigation.entry.js.map