import { Component, Prop, h, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'form-field',
  styleUrl: 'form-field.css',
  shadow: true,
})
export class FormField {
  // Label voor het veld
  @Prop() label?: string;
  // Naam van het veld (verplicht)
  @Prop() name!: string;
  // Type veld (bijv. tekst of select)
  @Prop() type: string = 'text';
  // Standaardwaarde
  @Prop() value?: string = '';
  // Of het veld verplicht is
  @Prop() required?: boolean;
  // Placeholder tekst
  @Prop() placeholder?: string;
  // Minimale lengte
  @Prop() minlength?: number;
  // Maximale lengte
  @Prop() maxlength?: number;
  // Validatiepatroon
  @Prop() pattern?: string;
  // Foutmelding
  @Prop() error: string;
  // Opties voor select-velden
  @Prop() options?: { value: string; label: string }[];

  // Houdt bij of het veld geldig is
  @State() valid: boolean = true;
  // Houdt bij of het veld is aangeraakt
  @State() touched: boolean = false;
  @State() showError: boolean = false;

  // EventEmitter om wijzigingen in veldwaarden door te geven aan de parent component
  @Event() valueChanged: EventEmitter<{ name: string; value: string; valid: boolean }>;

  // Timer voor error-delay
  private errorTimer: ReturnType<typeof setTimeout>;

  // Directe validatie bij input
  private handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement | HTMLSelectElement;
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
    } else {
      this.showError = false;
    }
  };

  // Markeert het veld als aangeraakt bij verlies van focus
  private handleBlur = () => {
    this.touched = true;
    // Bij blur: error direct tonen als ongeldig
    if (!this.valid) {
      this.showError = true;
    }
  };

  render() {
    return (
      <div class="form-field">
        {/* Label voor het veld */}
        {this.label && (
          <label htmlFor={this.name}>
            {this.label}
            {this.required}
          </label>
        )}
        {/* Render een select of input afhankelijk van het type */}
        {this.type === 'select' ? (
          <select id={this.name} name={this.name} required={this.required} onInput={this.handleInput} onBlur={this.handleBlur} class={{ invalid: !this.valid && this.touched }}>
            {this.options?.map(option => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        ) : (
          <input
            id={this.name}
            name={this.name}
            type={this.type}
            value={this.value}
            required={this.required}
            placeholder={this.placeholder}
            minlength={this.minlength}
            maxlength={this.maxlength}
            pattern={this.pattern}
            onInput={this.handleInput}
            onBlur={this.handleBlur}
            class={{ invalid: !this.valid && this.touched }}
          />
        )}
        {/* Error pas tonen na delay */}
        <p class="error" style={{ visibility: this.showError ? 'visible' : 'hidden' }}>
          <img src="assets/Notification-icons.svg" alt="error-icon" />
          <span>{this.error}</span>
        </p>
      </div>
    );
  }
}
