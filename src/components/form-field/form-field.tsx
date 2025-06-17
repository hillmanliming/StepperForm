import { Component, Prop, h, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'form-field',
  styleUrl: 'form-field.css',
  shadow: true,
})
export class FormField {
  // Props voor configuratie van het formulierveld (bijv. label, type, validatie)
  @Prop() label?: string;
  @Prop() name!: string; // Naam van het veld (verplicht)
  @Prop() type: string = 'text'; // Type veld (bijv. tekst of select)
  @Prop() value?: string = ''; // Standaardwaarde
  @Prop() required?: boolean; // Of het veld verplicht is
  @Prop() placeholder?: string; // Placeholder tekst
  @Prop() minlength?: number; // Minimale lengte
  @Prop() maxlength?: number; // Maximale lengte
  @Prop() pattern?: string; // Validatiepatroon
  @Prop() error: string; // Foutmelding
  @Prop() options?: { value: string; label: string }[]; // Opties voor select-velden

  @State() valid: boolean = true; // Houdt bij of het veld geldig is
  @State() touched: boolean = false; // Houdt bij of het veld is aangeraakt

  // EventEmitter om wijzigingen in veldwaarden door te geven aan de parent component
  @Event() valueChanged: EventEmitter<{ name: string; value: string; valid: boolean }>;

  private debounceTimer: ReturnType<typeof setTimeout>;

  // Verwerkt invoer en valideert het veld
  private handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement | HTMLSelectElement;
    const value = input.value;
    this.touched = true;
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.valid = input.checkValidity();
      this.valueChanged.emit({ name: this.name, value, valid: this.valid }); // Stuurt data naar parent
    }, 200);
  };

  // Markeert het veld als aangeraakt bij verlies van focus
  private handleBlur = () => {
    this.touched = true;
  };

  render() {
    return (
      <div class="form-field">
        {/* Label voor het veld */}
        {this.label && (
          <label htmlFor={this.name}>
            {this.label}
            {this.required && <span class="required">*</span>}
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
        {/* Foutmelding */}
        <p class="error" style={{ visibility: !this.valid && this.touched ? 'visible' : 'hidden' }}>
          <img src="/assets/Notification-icons.svg" alt="" class="error-icon" />
          <span>{this.error}</span>
        </p>
      </div>
    );
  }
}
