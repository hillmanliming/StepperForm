import { r as registerInstance, d as getElement, h } from './index-B-rzIFDu.js';
import { f as formDataStore, s as state } from './store-form-data-BVOf73t3.js';

const formStepCss = ":host{display:block}";

const FormStep = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    // Stapnummer van deze stap
    step;
    get el() { return getElement(this); }
    // Luister naar wijzigingen in formulierwaarden en sla geldige waarden op in de store
    handleValueChanged(event) {
        const { name, value, valid } = event.detail;
        if (valid) {
            formDataStore.setField(name, value);
        }
    }
    render() {
        // Render alleen als dit de huidige stap is
        if (this.step !== state.currentStep)
            return null;
        // Focus op het eerste veld in de stap
        setTimeout(() => {
            const child = this.el.querySelector('form-field');
            if (child?.shadowRoot) {
                const input = child.shadowRoot.querySelector('input');
                input?.focus();
            }
        }, 0);
        return (h("div", { class: "form-step" }, h("slot", null)));
    }
};
FormStep.style = formStepCss;

export { FormStep as form_step };
//# sourceMappingURL=form-step.entry.esm.js.map

//# sourceMappingURL=form-step.entry.js.map