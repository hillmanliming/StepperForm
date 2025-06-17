import { Component, h, Prop, State, Listen, Element } from '@stencil/core';
import { formDataStore } from '../../store/store-form-data';

@Component({
  tag: 'form-step',
  styleUrl: 'form-step.css',
  shadow: true,
})
export class FormStep {
  @Prop() step: number; // Stapnummer
  @State() currentStep: number = 0; // Huidige stap
  @Element() el: HTMLElement; // Referentie naar het element

  // Luister naar wijzigingen in de huidige stap
  @Listen('updateStep', { target: 'window' })
  handleStepChange(event: CustomEvent<number>) {
    this.currentStep = event.detail; // Werk de huidige stap bij
  }

  // Luister naar wijzigingen in formulierwaarden
  @Listen('valueChanged')
  handleValueChanged(event: CustomEvent<{ name: string; value: string; valid: boolean }>) {
    const { name, value, valid } = event.detail;
    if (valid) {
      formDataStore.setField(name, value); // Sla geldige waarden op in de store
    }
  }

  render() {
    // Render alleen als dit de huidige stap is
    if (this.step !== this.currentStep) return null;

    // Focus op het eerste veld in de stap
    if (this.step === this.currentStep) {
      const child = this.el.querySelector('form-field');
      if (child?.shadowRoot) {
        setTimeout(() => {
          const input = child.shadowRoot.querySelector('input');
          input.focus();
        }, 0);
      }
    }

    return (
      <div class="form-step">
        <slot></slot> {/* Render de inhoud van de stap */}
      </div>
    );
  }
}

// stepper focus flexbox reverse
