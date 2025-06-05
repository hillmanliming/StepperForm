import { Component, h, Prop, State, Listen, Element } from '@stencil/core';
import { formDataStore } from '../../store/store-form-data';

@Component({
  tag: 'form-step',
  styleUrl: 'form-step.css',
  shadow: true,
})
export class FormStep {
  @Prop() step: number;
  @State() currentStep: number = 0;
  @Element() el: HTMLElement;

  @Listen('updateStep', { target: 'window' })
  handleStepChange(event: CustomEvent<number>) {
    this.currentStep = event.detail;
  }

  @Listen('valueChanged')
  handleValueChanged(event: CustomEvent<{ name: string; value: string; valid: boolean }>) {
    const { name, value, valid } = event.detail;
    if (valid) {
      formDataStore.setField(name, value);
    }
  }
  render() {
    if (this.step !== this.currentStep) return null;

    if(this.step === this.currentStep) {
      const child = this.el.querySelector('form-field');
  
      if(child?.shadowRoot) { 
        setTimeout(() => {
          const input = child.shadowRoot.querySelector('input');
          input.focus();
        },0)
      }
    }

    return (
      <div class="form-step">
        <slot></slot>
      </div>
    );
  }
}

// stepper focus flexbox reverse
