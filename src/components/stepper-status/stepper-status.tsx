import { Component, h } from '@stencil/core';
import { state } from '../../store/store-form-data';

@Component({
  tag: 'stepper-status',
  styleUrl: 'stepper-status.css',
  shadow: true,
})
export class StepperStatus {
  render() {
    // Stappen, labels en tijdsindicaties voor de stepper
    const steps = [1, 2, 3, 4];
    const stepLabels = ['Persoonlijke informatie', 'Relevante gegevens', 'Reizen en vervoer', 'Overzicht'];
    const stepTimes = ['<1 min', '<1 min', '<1 min', ''];

    return (
      <div class="stepper-status">
        {steps.map((step, index) => {
          // Bepaal de status-klasse voor deze stap
          let stepClass = 'inactive';
          if (index < state.currentStep) {
            stepClass = 'completed';
          } else if (index === state.currentStep) {
            stepClass = 'active';
          }

          return (
            <div class="step-container">
              {/* Stapnummer of leeg als voltooid */}
              <div class={stepClass}>{stepClass === 'completed' ? '' : step}</div>
              <div class="step-info">
                {/* Label van de stap */}
                <span class={`step-label ${index === state.currentStep ? 'current-label' : ''}`}>{stepLabels[index]}</span>
                {/* Tijdindicatie indien aanwezig */}
                {stepTimes[index] && <span class="time-indication">{stepTimes[index]}</span>}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
