import { createStore } from '@stencil/store';

// Type-definitie voor de status van elke stap in het formulier
interface StepStatusMap {
  step: number;
  status: 'inactive' | 'active' | 'completed';
}

// Maak een centrale store aan om formuliergegevens en stapstatussen bij te houden
const { state, onChange } = createStore({
  data: {} as { [key: string]: string }, // Opslag voor alle formulierinvoervelden
  stepStatus: [] as StepStatusMap[], // Opslag voor de status van elke stap
  currentStep: 0, // Huidige actieve stap
});

// Exporteer de state en onChange listener zodat andere componenten deze kunnen gebruiken
export { state, onChange };

export const formDataStore = {
  // Stel een waarde in voor een specifiek formulierveld
  setField(name: string, value: string) {
    state.data[name] = value;
  },

  // Haal alle ingevulde formulierwaarden op
  getAllFields() {
    return state.data;
  },

  // Werk de status van een stap bij (bijv. actief of voltooid)
  updateStepStatus(step: number, status: 'inactive' | 'active' | 'completed') {
    const index = state.stepStatus.findIndex(s => s.step === step);
    state.stepStatus = index > -1 ? state.stepStatus.map(s => (s.step === step ? { ...s, status } : s)) : [...state.stepStatus, { step, status }];
  },

  // Haal de status van alle stappen op
  getStepStatus() {
    return state.stepStatus;
  },

  // Zet de huidige actieve stap
  setCurrentStep(step: number) {
    state.currentStep = step;
  },

  // Haal de huidige actieve stap op
  getCurrentStep() {
    return state.currentStep;
  },
};
