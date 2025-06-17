import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'form-navigation',
  styleUrl: 'form-navigation.css',
  shadow: true,
})
export class FormNavigation {
  @Prop() currentStep: number; // Huidige stap
  @Prop() maxStep: number; // Maximale stap
  @Prop() disableNext: boolean; // Of de volgende knop uitgeschakeld moet zijn

  @Prop() navigateStep: (step: number) => void; // Functie om naar een andere stap te navigeren

  // Navigeer naar een specifieke stap
  private goToStep(step: number) {
    this.navigateStep?.(step); // Roept de functie aan die door de parent is doorgegeven
  }

  render() {
    return (
      <div class="nav-buttons">
        {/* Vorige knop */}
        <button class="sec-button" type="button" onClick={() => this.goToStep(this.currentStep - 1)} disabled={this.currentStep === 0}>
          Vorige
        </button>
        {/* Volgende knop */}
        <button class="primary-button" type="button" onClick={() => this.goToStep(this.currentStep + 1)} disabled={this.currentStep === this.maxStep || this.disableNext}>
          Volgende
        </button>
      </div>
    );
  }
}
