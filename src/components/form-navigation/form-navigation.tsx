import { Component, h, Prop } from '@stencil/core';
import { formDataStore } from '../../store/store-form-data';

@Component({
  tag: 'form-navigation',
  styleUrl: 'form-navigation.css',
  shadow: true,
})
export class FormNavigation {
  // Huidige stap (wordt als prop doorgegeven)
  @Prop() currentStep: number;
  // Hoogste stapnummer
  @Prop() maxStep: number;
  // Of de volgende knop uitgeschakeld moet zijn
  @Prop() disableNext: boolean;

  // Zet de huidige stap in de store
  private goToStep(step: number) {
    formDataStore.setCurrentStep(step);
  }

  render() {
    // Controleer of dit de laatste stap is
    const isLastStep = this.currentStep === this.maxStep;

    return (
      <div class="nav-buttons">
        {/* Vorige knop */}
        <button
          class="secondary-button"
          type="button"
          onClick={() => this.goToStep(this.currentStep - 1)}
          disabled={this.currentStep === 0}
        >
          Vorige
        </button>
        {/* Volgende of versturen knop */}
        {!isLastStep ? (
          <button
            class="primary-button"
            type="button"
            onClick={() => this.goToStep(this.currentStep + 1)}
            disabled={this.disableNext}
          >
            Volgende
          </button>
        ) : (
          <button
            class="primary-button"
            type="submit"
            disabled={this.disableNext}
          >
            Versturen
          </button>
        )}
      </div>
    );
  }
}
