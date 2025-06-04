import { Component, h, Prop, State, Listen } from '@stencil/core';
import { formDataStore } from '../../store/store-form-date';

@Component({
  tag: 'form-step',
  styleUrl: 'form-step.css',
  shadow: true,
})
export class FormStep {
  @Prop() step: number;
  @State() currentStep: number = 0;

  @Listen('updateStep', { target: 'window' })
  handleStepChange(event: CustomEvent<number>) {
    this.currentStep = event.detail;
  }

  @Listen('valueChanged')
  handleValueChanged(event: CustomEvent<{ name: string; value: string; valid: boolean }>) {
    const { name, value, valid } = event.detail;
    if (valid) {
      formDataStore.setField(name, value);
      console.log(`Field ${name} updated with value: ${value}`);
    } else {
      console.warn(`Field ${name} is invalid. Value not updated.`);
    }
  }
  render() {
    if (this.step !== this.currentStep) return null;

    return (
      <div class="form-step">
        <slot></slot>
      </div>
    );
  }
}
