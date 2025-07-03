import { r as registerInstance, a as createEvent, h } from './index-1jtv562_.js';

const formFieldCss = ":host{display:block;box-sizing:border-box;margin:0;padding:0;--font-size-base:1.125rem;--line-height-base:1.625rem;--font-size-small:0.875rem;--line-height-small:1.125rem;--input-select-border:1px solid #007bc7}*{box-sizing:border-box;padding:0;margin:0}.form-field{display:flex;flex-direction:column;margin-bottom:1rem}label{font-size:var(--font-size-base);line-height:var(--line-height-base)}.required{color:#e73629;margin-left:0.25rem}input,select{font-size:1rem;border:1px solid #999999;width:18rem;height:44px;box-sizing:border-box;appearance:none;margin:0.25rem 0 0.25rem 0;outline:none}input{padding:0.5rem 1rem;transition-duration:0.15s}select{padding:0rem 1rem;}select:hover{cursor:pointer;}input:hover:not(:focus),select:hover:not(:focus){border:1px solid black}input:focus,select:focus{border:var(--input-select-border);border-radius:0}input.invalid+.error,select.invalid+.error{visibility:visible}.error{font-size:var(--font-size-small);line-height:var(--line-height-small);visibility:hidden;display:flex;align-items:center;gap:0.25rem}";

const FormField = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.valueChanged = createEvent(this, "valueChanged", 7);
    }
    // Label voor het veld
    label;
    // Naam van het veld (verplicht)
    name;
    // Type veld (bijv. tekst of select)
    type = 'text';
    // Standaardwaarde
    value = '';
    // Of het veld verplicht is
    required;
    // Placeholder tekst
    placeholder;
    // Minimale lengte
    minlength;
    // Maximale lengte
    maxlength;
    // Validatiepatroon
    pattern;
    // Foutmelding
    error;
    // Opties voor select-velden
    options;
    // Houdt bij of het veld geldig is
    valid = true;
    // Houdt bij of het veld is aangeraakt
    touched = false;
    showError = false;
    // EventEmitter om wijzigingen in veldwaarden door te geven aan de parent component
    valueChanged;
    // Timer voor error-delay
    errorTimer;
    // Directe validatie bij input
    handleInput = (event) => {
        const input = event.target;
        const value = input.value;
        this.touched = true;
        // Input validatie
        this.valid = input.checkValidity();
        this.valueChanged.emit({ name: this.name, value, valid: this.valid });
        // Reset error-timer
        clearTimeout(this.errorTimer);
        // Alleen error tonen als ongeldig en touched
        if (!this.valid && this.touched) {
            this.errorTimer = setTimeout(() => {
                this.showError = true;
            }, 250);
        }
        else {
            this.showError = false;
        }
    };
    // Markeert het veld als aangeraakt bij verlies van focus
    handleBlur = () => {
        this.touched = true;
        // Bij blur: error direct tonen als ongeldig
        if (!this.valid) {
            this.showError = true;
        }
    };
    render() {
        return (h("div", { key: '3c836763463227f72442689265f0a69a2dab7d4b', class: "form-field" }, this.label && (h("label", { key: 'd218a93e94566cf3b01fc8a95397c47954786d3f', htmlFor: this.name }, this.label, this.required)), this.type === 'select' ? (h("select", { id: this.name, name: this.name, required: this.required, onInput: this.handleInput, onBlur: this.handleBlur, class: { invalid: !this.valid && this.touched } }, this.options?.map(option => (h("option", { value: option.value }, option.label))))) : (h("input", { id: this.name, name: this.name, type: this.type, value: this.value, required: this.required, placeholder: this.placeholder, minlength: this.minlength, maxlength: this.maxlength, pattern: this.pattern, onInput: this.handleInput, onBlur: this.handleBlur, class: { invalid: !this.valid && this.touched } })), h("p", { key: 'a8b59f290fea4dd64c3fb5f272512e0d33a50dce', class: "error", style: { visibility: this.showError ? 'visible' : 'hidden' } }, h("img", { key: '73d1e76db10387ddc1f4f7d10243189c80eb0f47', src: "assets/Notification-icons.svg", alt: "error-icon" }), h("span", { key: '8adba801f0e4f9d5af4401e7e42de13921fa41f0' }, this.error))));
    }
};
FormField.style = formFieldCss;

export { FormField as form_field };
//# sourceMappingURL=form-field.entry.esm.js.map

//# sourceMappingURL=form-field.entry.js.map