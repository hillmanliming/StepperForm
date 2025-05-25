import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'form-field',
  styleUrl: 'form-field.css',
  shadow: true,
})
export class FormField {
  @Prop() label?: string;
  @Prop() name!: string;
  @Prop() type: string = 'text';
  @Prop() value?: string;
  @Prop() required?: boolean;
  @Prop() error?: string;
  @Prop() placeholder?: string;
  @Prop() minlength?: number;

  @Event() valueChanged: EventEmitter<{ name: string; value: string }>;

  private handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.valueChanged.emit({ name: this.name, value: input.value });
    console.log(`Updated: ${this.name} = ${input.value}`);
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

        <input id={this.name} name={this.name} type={this.type} value={this.value} required={this.required} placeholder={this.placeholder} minlength={this.minlength} onInput={this.handleInput} />

        {this.error && <p class="error">{this.error}</p>}
      </div>
    );
  }
}
