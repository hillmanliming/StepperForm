import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'form-navigation',
  styleUrl: 'form-navigation.css',
  shadow: true,
})
export class FormNavigation {
  @Prop() currentStep: number; // Current active step
  @Prop() totalSteps: number; // Total number of steps

  @Event() navigateBack: EventEmitter<void>; // Event to navigate back
  @Event() navigateNext: EventEmitter<void>; // Event to navigate next

  render() {
    return (
      <div class="nav-buttons">
        <button type="button" onClick={() => this.navigateBack.emit()} disabled={this.currentStep === 0}>
          Back
        </button>
        <button type="button" onClick={() => this.navigateNext.emit()} disabled={this.currentStep === this.totalSteps - 1}>
          Next
        </button>
      </div>
    );
  }
}
