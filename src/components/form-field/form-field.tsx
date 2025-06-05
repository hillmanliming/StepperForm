import { Component, Prop, h, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'form-field',
  styleUrl: 'form-field.css',
  shadow: true,
})
export class FormField {
  @Prop() label?: string;
  @Prop() name!: string;
  @Prop() type: string = 'text'; // Can be 'text', 'select', etc.
  @Prop() value?: string = '';
  @Prop() required?: boolean;
  @Prop() placeholder?: string;
  @Prop() minlength?: number;
  @Prop() maxlength?: number;
  @Prop() pattern?: string;
  @Prop() error: string;
  @Prop() options?: { value: string; label: string }[]; // For select options
  @State() valid: boolean = true;
  @State() touched: boolean = false;
  @Event() valueChanged: EventEmitter<{ name: string; value: string; valid: boolean }>;

  private debounceTimer: ReturnType<typeof setTimeout>;

  private handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement | HTMLSelectElement;
    const value = input.value;
    this.touched = true;
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.valid = input.checkValidity();
      this.valueChanged.emit({ name: this.name, value, valid: this.valid });
    }, 200);
  };

  private handleBlur = () => {
    this.touched = true;
  };

  render() {
    return (
      <div class="form-field">
        {this.label && (
          <label htmlFor={this.name}>
            {this.label}
            {this.required && <span class="required">*</span>}
          </label>
        )}
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
        <p class="error" style={{ visibility: !this.valid && this.touched ? 'visible' : 'hidden' }}>
          {this.error}
        </p>
      </div>
    );
  }
}
