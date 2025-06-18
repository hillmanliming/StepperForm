import { Component, h, State } from '@stencil/core';
import { formDataStore } from '../../store/store-form-data';

@Component({
  tag: 'stepper-status',
  styleUrl: 'stepper-status.css',
  shadow: true,
})
export class StepperStatus {
  @State() currentStep: number; // Huidige stap

  componentWillLoad() {
    // Haal de huidige stap op uit de store en luister naar wijzigingen
    this.currentStep = formDataStore.getCurrentStep();
    formDataStore.setCurrentStep = (step: number) => {
      this.currentStep = step;
    };
  }

  render() {
    // Definieer de stappen en labels
    const steps = [1, 2, 3, 4];
    const stepLabels = ['Persoonlijke informatie', 'Relevante gegevens', 'Reizen en vervoer', 'Overzicht'];

    return (
      <div class="stepper-status">
        {steps.map((step, index) => {
          // Bepaal de CSS-klasse op basis van de status van de stap
          let stepClass = 'inactive';
          if (index < this.currentStep) {
            stepClass = 'completed'; // Eerdere stappen zijn voltooid
          } else if (index === this.currentStep) {
            stepClass = 'active'; // Huidige stap is actief
          }

          return (
            <div class="step-container">
              <div class={stepClass}>{stepClass === 'completed' ? '' : step}</div>
              <span class={`step-label ${index === this.currentStep ? 'current-label' : ''}`}>{stepLabels[index]}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
