import { Component, h, Prop, State, Listen } from '@stencil/core';

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

  render() {
    if (this.step !== this.currentStep) return null;

    return (
      <div class="form-step">
        <slot>lre</slot>
      </div>
    );
  }
}
