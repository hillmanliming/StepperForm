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
          <form-field name="Naam" label="Volledige naam" type="text" value="" required aria-required="true" error="" minlength={3}></form-field>
          <form-field name="Werkervaring" label="Aantal jaren relevante werkervaring" type="text" value="" required aria-required="true" error="" minlength={3}></form-field>
        </form-step>
        <form-step step={1}>
          <form-field name="Email" label="Email" type="email" value="" required aria-required="true" error="" minlength={3}></form-field>
          <form-field name="Mobiele nummer" label="Mobiele nummer" type="number" value="" required aria-required="true" error="" minlength={3}></form-field>
        </form-step>
        <form-step step={2}>
          <form-field name="Transportation" label="Transport" type="text" value="" required aria-required="true" error="" minlength={3}></form-field>
        </form-step>
        <form-step step={3}>
          <p>
            summary
            <br></br>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio laboriosam corporis porro voluptatum eius fuga, libero quis iste quisquam vel cum expedita quae delectus
            explicabo quas. Animi deleniti quo dolor.
          </p>
        </form-step>
        <form-navigation
          currentStep={this.currentStep}
          maxStep={3}
          navigateStep={(step: number) => this.goToStep(step)}
        ></form-navigation>
      </form>
    );
  }
}
