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
  handleValueChanged(event: CustomEvent<{ name: string; value: string }>) {
    const { name, value } = event.detail;
    formDataStore.setField(name, value);
  }

  render() {
    if (this.step === 3) {
      console.log('Summary', formDataStore.getAllFields());
    }
    if (this.step !== this.currentStep) return null;

    return (
      <div class="form-step">
        <slot></slot>
      </div>
    );
  }
}
