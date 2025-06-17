import { Component, h, State, Listen } from '@stencil/core';
import { formDataStore } from '../../store/store-form-data';

@Component({
  tag: 'form-stepper',
  styleUrl: 'form-stepper.css',
  shadow: true,
})
export class FormStepper {
  @State() currentStep: number = 0;
  @State() validationStatus: { [key: string]: boolean } = {};
  @State() formData: { [key: string]: string } = {};

  componentWillLoad() {
    // Initialize currentStep from the global store
    this.currentStep = formDataStore.getCurrentStep();
  }

  //dispatch nodig? stencil event gebruiken
  goToStep(step: number) {
    this.currentStep = step;
    formDataStore.setCurrentStep(step); // Update the global store
    window.dispatchEvent(new CustomEvent('updateStep', { detail: step }));
  }

  @Listen('valueChanged')
  handleFieldChange(event: CustomEvent<{ name: string; valid: boolean; value?: string }>) {
    const { name, valid, value } = event.detail;

    this.validationStatus = { ...this.validationStatus, [name]: valid && (!value || value !== '0') };
    console.log('Validation Status:', this.validationStatus);
  }

  @Listen('valueChanged')
  handleValueChanged(event: CustomEvent<{ name: string; value: string }>) {
    const { name, value } = event.detail;
    formDataStore.setField(name, value);
    this.formData = formDataStore.getAllFields();
  }

  private isCurrentStepValid(): boolean {
    // Define the required fields for each step, voor niet required fields return true, don't have to be added
    const stepFieldsMap = {
      0: ['Naam', 'Email'],
      1: ['Mobiele nummer', 'Werkervaring'],
      2: ['Woonplaats', 'Vervoersmiddel'],
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
            <form-field
              name="Naam"
              label="Voor- en achternaam"
              type="text"
              value=""
              placeholder="Voor- en achternaam"
              required
              aria-required="true"
              error="Voer alstublieft een geldige naam in."
              minlength={2}
              maxlength={30}
            ></form-field>
            <form-field
              name="Email"
              label="Email"
              type="email"
              value=""
              placeholder="Email"
              required
              aria-required="true"
              error="Voer alstublieft een geldig emailadres in."
              minlength={2}
              maxlength={30}
            ></form-field>
          </form-step>
          <form-step step={1}>
            <form-field
              name="Mobiele nummer"
              label="Mobiele nummer"
              pattern="[0-9]+"
              type="tel"
              value=""
              placeholder="Mobiele nummer"
              required
              aria-required="true"
              error="Voer alstublieft een geldig mobiel nummer in."
              minlength={2}
              maxlength={10}
            ></form-field>
            <form-field
              name="Werkervaring"
              label="Aantal jaar werkervaring"
              inputmode="numeric"
              pattern="[0-9]+"
              type="text"
              value=""
              placeholder="Aantal jaar werkervaring"
              required
              aria-required="true"
              error="Voer alstublieft een geldig aantal jaren in."
              minlength={1}
              maxlength={2}
            ></form-field>
          </form-step>
          <form-step step={2}>
            <form-field
              name="Woonplaats"
              label="Woonplaats"
              type="text"
              value=""
              placeholder="Woonplaats"
              required
              aria-required="true"
              error="Voer alstublieft een geldige woonplaats in."
              minlength={2}
              maxlength={15}
            ></form-field>
            <form-field
              label="Vervoersmiddel"
              name="Vervoersmiddel"
              type="select"
              required={true}
              error="Selecteer alstublieft een vervoersmiddel."
              options={[
                { value: '0', label: '----- Selecteer optie -----' },
                { value: 'Openbaar vervoer', label: 'Openbaar vervoer' },
                { value: 'Eigen vervoer', label: 'Eigen vervoer' },
              ]}
            ></form-field>
          </form-step>
          <form-step step={3} class={this.currentStep === 3 ? 'summary' : ''}>
            <strong>Samenvatting</strong>
            <ul>
              {Object.entries(this.formData).map(([key, value]) => (
                <li>
                  <div class="summary-item">
                    <strong>{key}:</strong> {value}
                  </div>
                </li>
              ))}
            </ul>
          </form-step>
        </form>
        <form-navigation currentStep={this.currentStep} maxStep={3} navigateStep={(step: number) => this.goToStep(step)} disableNext={!this.isCurrentStepValid()}></form-navigation>
      </div>
    );
  }
}
