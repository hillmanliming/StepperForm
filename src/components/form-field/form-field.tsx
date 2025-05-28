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
  @Prop() maxlength?: number;
  @Prop() pattern?: string;
  @Prop() error: string;
  @State() valid: boolean = true; // Use @State() for mutable valid state
  @State() touched: boolean = false;
  @Event() valueChanged: EventEmitter<{ name: string; value: string; valid: boolean }>;

  private debounceTimer: ReturnType<typeof setTimeout>;
  private handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.touched = true;
    //debounce, after 250ms handleInput
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.valid = input.checkValidity();
      this.valueChanged.emit({ name: this.name, value, valid: this.valid });
    }, 250);
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
          maxlength={this.maxlength}
          // CHECK PATTERN STUFF
          pattern={this.pattern}
          onInput={this.handleInput}
          onBlur={this.handleBlur}
          class={{ invalid: !this.valid && this.touched }}
        />
        <p class="error" style={{ visibility: !this.valid && this.touched ? 'visible' : 'hidden' }}>
          {this.error}
        </p>
      </div>
    );
  }
}
