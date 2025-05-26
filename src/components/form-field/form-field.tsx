import { Component, Prop, h, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'form-field',
  styleUrl: 'form-field.css',
  shadow: true,
})
export class FormField {
  @Prop() label?: string;
  @Prop() name!: string;
  @Prop() type: string = 'text';
  @Prop() value?: string = '';
  @Prop() required?: boolean;
  @Prop() placeholder?: string;
  @Prop() minlength?: number;
  @Prop() error: string;
  @State() valid: boolean = true; // Use @State() for mutable valid state
  @State() touched: boolean = false;
  @Event() valueChanged: EventEmitter<{ name: string; value: string; valid: boolean }>;

  private validateField(value: string): boolean {
    if (this.required && value.trim().length < (this.minlength || 0)) {
      return false;
    }

    return true;
  }

  private handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const isValid = this.validateField(input.value);
    this.valid = isValid; // Update the valid state
    this.valueChanged.emit({ name: this.name, value: input.value, valid: isValid });
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
        <input
          id={this.name}
          name={this.name}
          type={this.type}
          value={this.value}
          required={this.required}
          placeholder={this.placeholder}
          minlength={this.minlength}
          onInput={this.handleInput}
          onBlur={this.handleBlur}
        />
        <p class="error" style={{ visibility: !this.valid && this.touched ? 'visible' : 'hidden' }}>
          {this.error}
        </p>
      </div>
    );
  }
}
