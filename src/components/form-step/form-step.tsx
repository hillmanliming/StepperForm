import { Component, h, Prop, Listen, Element } from '@stencil/core';
import { formDataStore, state } from '../../store/store-form-data';

@Component({
  tag: 'form-step',
  styleUrl: 'form-step.css',
  shadow: true,
})
export class FormStep {
  // Stapnummer van deze stap
  @Prop() step: number;
  // Referentie naar het element
  @Element() el: HTMLElement;

  // Luister naar wijzigingen in formulierwaarden en sla geldige waarden op in de store
  @Listen('valueChanged')
  handleValueChanged(event: CustomEvent<{ name: string; value: string; valid: boolean }>) {
    const { name, value, valid } = event.detail;
    if (valid) {
      formDataStore.setField(name, value);
    }
  }

  render() {
    // Render alleen als dit de huidige stap is
    if (this.step !== state.currentStep) return null;

    // Focus op het eerste veld in de stap
    setTimeout(() => {
      const child = this.el.querySelector('form-field');
      if (child?.shadowRoot) {
        const input = child.shadowRoot.querySelector('input');
        input?.focus();
      }
    }, 0);

    return (
      <div class="form-step">
        {/* Render de inhoud van de stap */}
        <slot></slot>
      </div>
    );
  }
}
