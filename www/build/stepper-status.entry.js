import { r as registerInstance, h } from './index-1jtv562_.js';
import { s as state } from './store-form-data-CuSxk1Cs.js';

const stepperStatusCss = ":host{display:block;--font-size-base:1.125rem;--line-height-base:1.625rem;--font-size-small:0.875rem;--line-height-small:1.125rem;--status-active-color:#007bc7;--status-completed-color:#39870b}@font-face{font-family:'ROsanswebtextregular';src:url('../../assets/ROsanswebtextbold.woff') format('woff');font-weight:bold;font-style:normal}.stepper-status{display:flex;flex-direction:column;gap:2rem;background-color:white;padding:2rem}.step-container{display:flex;flex-direction:row;align-items:center;gap:1rem;}.active,.inactive,.completed{font-size:var(--font-size-small);line-height:var(--line-height-small);aspect-ratio:1;width:2rem;height:2rem;text-align:center;box-sizing:border-box;aspect-ratio:1;border-radius:50%;display:flex;align-items:center;justify-content:center}.step-info{display:flex;flex-direction:column;}.time-indication{font-size:var(--font-size-small);line-height:var(--line-height-small)}.step-label{font-size:var(--font-size-base);line-height:var(--line-height-base)}.current-label{font-weight:bolder}.active{color:rgb(255, 255, 255);background-color:var(--status-active-color);border:2px solid var(--status-active-color);font-weight:bold}.inactive{border:2px solid black}.completed{color:white;background-color:var(--status-completed-color);border:2px solid var(--status-completed-color)}.completed::before{content:'✓';font-size:1.3rem;line-height:1;display:flex;justify-content:center;align-items:center;width:100%;height:100%}@media screen and (max-width: 768px){.stepper-status{padding:1rem;gap:1rem;}}";

const StepperStatus = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        // Stappen, labels en tijdsindicaties voor de stepper
        const steps = [1, 2, 3, 4];
        const stepLabels = ['Persoonlijke informatie', 'Relevante gegevens', 'Reizen en vervoer', 'Overzicht'];
        const stepTimes = ['<1 min', '<1 min', '<1 min', ''];
        return (h("div", { key: '83b5a5da8e7a978c2f5f5f49f047a4aad994acd3', class: "stepper-status" }, steps.map((step, index) => {
            // Bepaal de status-klasse voor deze stap
            let stepClass = 'inactive';
            if (index < state.currentStep) {
                stepClass = 'completed';
            }
            else if (index === state.currentStep) {
                stepClass = 'active';
            }
            return (h("div", { class: "step-container" }, h("div", { class: stepClass }, stepClass === 'completed' ? '' : step), h("div", { class: "step-info" }, h("span", { class: `step-label ${index === state.currentStep ? 'current-label' : ''}` }, stepLabels[index]), stepTimes[index] && h("span", { class: "time-indication" }, stepTimes[index]))));
        })));
    }
};
StepperStatus.style = stepperStatusCss;

export { StepperStatus as stepper_status };
//# sourceMappingURL=stepper-status.entry.esm.js.map

//# sourceMappingURL=stepper-status.entry.js.map