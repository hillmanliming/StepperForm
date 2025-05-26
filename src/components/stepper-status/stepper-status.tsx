import { Component, h } from '@stencil/core';

@Component({
  tag: 'stepper-status',
  styleUrl: 'stepper-status.css',
  shadow: true,
})
export class StepperStatus {
  render() {
    return (
      <div>
        <div class="stepper-status">
          <div class="current">1</div>
          <div class="inactive">2</div>
          <div class="inactive">3</div>
          <div class="completed">4</div>
        </div>
      </div>
    );
  }
}
