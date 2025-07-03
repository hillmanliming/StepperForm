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
  // Handler voor het versturen van het formulier
  //De confirmatie is alleen een visuale feedback en wordt niet gebruikt in de logica; er wordt geen data naar een server gestuurd.
  @Prop() onSubmit: () => void;

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
        <button class="secondary-button" type="button" onClick={() => this.goToStep(this.currentStep - 1)} disabled={this.currentStep === 0}>
          Vorige
        </button>
        {/* Volgende of versturen knop */}
        <button class="primary-button" type="button" onClick={() => (isLastStep ? this.onSubmit() : this.goToStep(this.currentStep + 1))} disabled={this.disableNext}>
          {isLastStep ? 'Versturen' : 'Volgende'}
        </button>
      </div>
    );
  }
}
