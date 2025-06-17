import { Component, h, State } from '@stencil/core';
import { state, onChange } from '../../store/store-form-data';

@Component({
  tag: 'stepper-status',
  styleUrl: 'stepper-status.css',
  shadow: true,
})
export class StepperStatus {
  @State() currentStep: number;

  componentWillLoad() {
    // Initialize currentStep from the global store
    this.currentStep = state.currentStep;

    // Listen for changes to currentStep in the global store
    onChange('currentStep', newStep => {
      this.currentStep = newStep;
    });
  }

  render() {
    const steps = [1, 2, 3, 4]; // Define the steps
    const stepLabels = ['Persoonlijke informatie', 'Relevante gegevens', 'Reizen en vervoer', 'Overzicht']; // Define labels for each step

    return (
      <div class="stepper-status">
        {steps.map((step, index) => {
          let stepClass = 'inactive';
          if (index < this.currentStep) {
            stepClass = 'completed'; // Mark previous steps as complete
          } else if (index === this.currentStep) {
            stepClass = 'active'; // Mark the current step as active
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
