import { Component, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'form-stepper',
  styleUrl: 'form-stepper.css',
  shadow: true,
})
export class FormStepper {
  @State() currentStep: number = 0;
  @State() validationStatus: { [key: string]: boolean } = {};

  goToStep(step: number) {
    this.currentStep = step;
    window.dispatchEvent(new CustomEvent('updateStep', { detail: step }));
  }

  @Listen('valueChanged')
  handleFieldChange(event: CustomEvent<{ name: string; valid: boolean }>) {
    const { name, valid } = event.detail;
    this.validationStatus = { ...this.validationStatus, [name]: valid };
  }

  private isCurrentStepValid(): boolean {
    const stepFieldsMap = {
      0: ['Naam', 'Werkervaring'],
      1: ['Email', 'Mobiele nummer'],
      2: ['Transport'],
      3: [],
    };
    const requiredFields = stepFieldsMap[this.currentStep];
    return requiredFields.every(name => this.validationStatus[name]);
  }

  render() {
    return (
      <div class="form-stepper">
        <stepper-status></stepper-status>
        <form class="form">
          <form-step step={0}>
            <form-field name="Naam" label="Volledige naam" type="text" value="" required aria-required="true" error="Error" minlength={3}></form-field>
            <form-field
              name="Werkervaring"
              label="Aantal jaren relevante werkervaring"
              type="number"
              value=""
              required
              aria-required="true"
              error="Error"
              minlength={1}
            ></form-field>
          </form-step>
          <form-step step={1}>
            <form-field name="Email" label="Email" type="email" value="" required aria-required="true" error="" minlength={3}></form-field>
            <form-field name="Mobiele nummer" label="Mobiele nummer" type="number" value="" required aria-required="true" error="Error" minlength={3}></form-field>
          </form-step>
          <form-step step={2}>
            <form-field name="Transport" label="Transport" type="text" value="" required aria-required="true" error="Error" minlength={3}></form-field>
          </form-step>
          <form-step step={3}>
            <p>
              summary
              <br></br>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio laboriosam corporis porro voluptatum eius fuga, libero quis iste quisquam vel cum expedita quae
              delectus explicabo quas. Animi deleniti quo dolor.
            </p>
          </form-step>
          <form-navigation
            currentStep={this.currentStep}
            maxStep={3}
            navigateStep={(step: number) => this.goToStep(step)}
            disableNext={!this.isCurrentStepValid()}
          ></form-navigation>
        </form>
      </div>
    );
  }
}
