// Importeer Stencil tools en de store
import { Component, h, State, Listen } from '@stencil/core';
import { formDataStore, state } from '../../store/store-form-data';

// Mapping van stappen naar verplichte velden
const stepFieldsMap = {
  0: ['Naam', 'Email'],
  1: ['Mobiele nummer', 'Werkervaring'],
  2: ['Woonplaats', 'Vervoersmiddel'],
  3: [],
};

// Bepaal het hoogste stapnummer
const maxStep = Object.keys(stepFieldsMap).length - 1;

@Component({
  tag: 'form-stepper',
  styleUrl: 'form-stepper.css',
  shadow: true,
})
export class FormStepper {
  // Houdt bij welke velden geldig zijn
  @State() validationStatus: { [key: string]: boolean } = {};
  // Houdt de ingevulde formuliervelden bij
  @State() formData: { [key: string]: string } = {};
  @State() submitted: boolean = false;

  // Luister naar wijzigingen in formuliervelden
  @Listen('valueChanged')
  handleFieldChange(event: CustomEvent<{ name: string; valid: boolean; value?: string; minlength?: number }>) {
    const { name, valid, value, minlength } = event.detail;
    // Alleen valideren als de waarde lang genoeg is, of als er geen minlength is
    if (typeof minlength === 'number' && value && value.length < minlength) {
      this.validationStatus = { ...this.validationStatus, [name]: false };
    } else {
      this.validationStatus = { ...this.validationStatus, [name]: valid && (!value || value !== '0') };
    }
    this.formData = formDataStore.getAllFields();
  }

  // Handler voor het versturen van het formulier
  private handleSubmit = () => {
    this.submitted = true;
  };

  // Controleer of alle verplichte velden van de huidige stap geldig zijn
  private isCurrentStepValid(): boolean {
    const requiredFields = stepFieldsMap[state.currentStep];
    return requiredFields.every(name => this.validationStatus[name]);
  }

  // Render het formulier en de stappen
  render() {
    if (this.submitted) {
      return (
        <div class="confirmation">
          <img src="../assets/Checkmark.svg" alt="Checkmark" />
          <h2>Succesvol verzonden!</h2>
        </div>
      );
    }

    return (
      <div class="form-stepper">
        {/* Header met afbeelding en titels */}
        <header>
          <img src="../assets/Vaandel.png" alt="Vaandel" />
          <h1>Form Stepper Component</h1>
          <h2>Algemeen vooronderzoek</h2>
        </header>
        {/* Container voor de stepper en het formulier */}
        <div class="container">
          {/* Stap-indicator */}
          <stepper-status></stepper-status>
          {/* Formulier met stappen */}
          <form class="form">
            {/* Stap 0 */}
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
            {/* Stap 1 */}
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
            {/* Stap 2 */}
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
            {/* Stap 3: Samenvatting */}
            <form-step step={3} class={state.currentStep === 3 ? 'summary' : ''}>
              <div class="summary-content">
                <h3>Samenvatting</h3>
                <ul>
                  {Object.entries(this.formData).map(([key, value]) => (
                    <li class="summary-item">
                      <strong>{key}:</strong>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </form-step>
          </form>
        </div>
        {/* Navigatieknoppen onderaan */}
        <form-navigation currentStep={state.currentStep} maxStep={maxStep} disableNext={!this.isCurrentStepValid()} onSubmit={this.handleSubmit}></form-navigation>
      </div>
    );
  }
}
