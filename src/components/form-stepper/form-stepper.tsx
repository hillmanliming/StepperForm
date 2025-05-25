import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'form-stepper',
  styleUrl: 'form-stepper.css',
  shadow: true,
})
export class FormStepper {
  @State() currentStep: number = 0;

  goToStep(step: number) {
    this.currentStep = step;
    window.dispatchEvent(new CustomEvent('updateStep', { detail: step }));
  }

  render() {
    return (
      <form>
        <form-step step={0}>
          <form-field name="first name" label="Name" type="text" placeholder="Enter your name" value="" required aria-required="true" error="Invalid input"></form-field>
        </form-step>
        <form-step step={1}>
          <form-field name="email" label="Email" type="email" placeholder="Enter your email" value="" required aria-required="true" error="Invalid input"></form-field>
        </form-step>
        <form-step step={2}>
          <form-field name="phone" label="Phone" type="number" placeholder="Enter your phone number" value="" required aria-required="true" error="Invalid input"></form-field>
        </form-step>
        <form-step step={3}>
          <p>
            summary
            <br></br>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio laboriosam corporis porro voluptatum eius fuga, libero quis iste quisquam vel cum expedita quae delectus
            explicabo quas. Animi deleniti quo dolor.
          </p>
        </form-step>
        <div class="nav-buttons">
          <button type="button" onClick={() => this.goToStep(this.currentStep - 1)} disabled={this.currentStep === 0}>
            Back
          </button>
          <button type="button" onClick={() => this.goToStep(this.currentStep + 1)} disabled={this.currentStep === 3}>
            Next
          </button>
        </div>
      </form>
    );
  }
}
