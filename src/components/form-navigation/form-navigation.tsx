import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'form-navigation',
  styleUrl: 'form-navigation.css',
  shadow: true,
})
export class FormNavigation {
  @Prop() currentStep: number;
  @Prop() maxStep: number;
  @Prop() disableNext: boolean;

  @Prop() navigateStep: (step: number) => void;

  private goToStep(step: number) {
    this.navigateStep?.(step);
  }

  render() {
    return (
      <div class="nav-buttons">
        <button type="button" onClick={() => this.goToStep(this.currentStep - 1)} disabled={this.currentStep === 0}>
          Back
        </button>
        <button type="button" onClick={() => this.goToStep(this.currentStep + 1)} disabled={this.currentStep === this.maxStep || this.disableNext}>
          Next
        </button>
      </div>
    );
  }
}
