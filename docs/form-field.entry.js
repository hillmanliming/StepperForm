import { r as registerInstance, a as createEvent, h } from './index-epPAJl59.js';

const formFieldCss = "*{box-sizing:border-box;padding:0;margin:0}.form-field{display:flex;flex-direction:column;margin-bottom:1rem}label{font-size:1.125rem;line-height:1.625rem;font-weight:500}.required{color:#e73629;margin-left:0.25rem}input,select{font-size:1rem;border:1px solid #999999;width:18rem;height:44px;box-sizing:border-box;appearance:none;margin:0.25rem 0 0.25rem 0;outline:none}input{padding:0.5rem 1rem;}select{padding:0rem 1rem;}select:hover{cursor:pointer;}input:focus,select:focus{border:1px solid #007bc7;border-radius:0}input:hover,select:hover{border-color:#007bc7}.error{font-size:0.875rem;line-height:1.125rem;visibility:hidden;display:flex;align-items:center;gap:0.25rem}input.invalid+.error,select.invalid+.error{visibility:visible}";

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
    // EventEmitter om wijzigingen in veldwaarden door te geven aan de parent component
    valueChanged;
    // Timer voor debounce
    debounceTimer;
    // Verwerkt invoer en valideert het veld
    handleInput = (event) => {
        const input = event.target;
        const value = input.value;
        this.touched = true;
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            this.valid = input.checkValidity();
            // Emit wijziging naar parent
            this.valueChanged.emit({ name: this.name, value, valid: this.valid });
        }, 200);
    };
    // Markeert het veld als aangeraakt bij verlies van focus
    handleBlur = () => {
        this.touched = true;
    };
    render() {
        return (h("div", { key: '2fc0651d53c4ca02a2841d7cd5cc53dbcd302f28', class: "form-field" }, this.label && (h("label", { key: 'f08d71ff8610c33548e9bdb566177f0f857b78c5', htmlFor: this.name }, this.label, this.required)), this.type === 'select' ? (h("select", { id: this.name, name: this.name, required: this.required, onInput: this.handleInput, onBlur: this.handleBlur, class: { invalid: !this.valid && this.touched } }, this.options?.map(option => (h("option", { value: option.value }, option.label))))) : (h("input", { id: this.name, name: this.name, type: this.type, value: this.value, required: this.required, placeholder: this.placeholder, minlength: this.minlength, maxlength: this.maxlength, pattern: this.pattern, onInput: this.handleInput, onBlur: this.handleBlur, class: { invalid: !this.valid && this.touched } })), h("p", { key: 'fa1652b5b833fc2f26d2e7a74a5f6a69e47868d0', class: "error", style: { visibility: !this.valid && this.touched ? 'visible' : 'hidden' } }, h("img", { key: 'de2245e63bce3d2f476c55fda71b918e4703a11b', src: "/assets/Notification-icons.svg", alt: "", class: "error-icon" }), h("span", { key: '2f4374336108cb8bf60c690e7a90b2408b1af478' }, this.error))));
    }
};
FormField.style = formFieldCss;

export { FormField as form_field };
//# sourceMappingURL=form-field.entry.esm.js.map

//# sourceMappingURL=form-field.entry.js.map