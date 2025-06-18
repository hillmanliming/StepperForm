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
    // Haal de huidige stap op uit de store
    this.currentStep = formDataStore.getCurrentStep();

    // Luister naar wijzigingen in de huidige stap (indien nodig)
    // Als je reactieve updates wilt, kun je een eventlistener of observer toevoegen
  }

  render() {
    const steps = [1, 2, 3, 4]; // Definieer de stappen
    const stepLabels = ['Persoonlijke informatie', 'Relevante gegevens', 'Reizen en vervoer', 'Overzicht']; // Labels voor de stappen

    return (
      <div class="stepper-status">
        {steps.map((step, index) => {
          let stepClass = 'inactive';
          if (index < this.currentStep) {
            stepClass = 'completed'; // Markeer eerdere stappen als voltooid
          } else if (index === this.currentStep) {
            stepClass = 'active'; // Markeer de huidige stap als actief
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
