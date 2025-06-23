import { createStore } from '@stencil/store';

// Mogelijke statuswaarden voor een stap
type StepStatus = 'inactive' | 'active' | 'completed';

// Mapping van stap naar status
interface StepStatusMap {
  step: number;
  status: StepStatus;
}

// Globale store voor formulierdata en stappen
const { state } = createStore({
  data: {} as { [key: string]: string },
  stepStatus: [] as StepStatusMap[],
  currentStep: 0,
});

// API voor interactie met de store
export const formDataStore = {
  // Zet een veldwaarde
  setField(name: string, value: string) {
    state.data[name] = value;
  },
  // Haal alle veldwaarden op
  getAllFields(): { [key: string]: string } {
    return state.data;
  },
  // Zet de status van een stap
  setStepStatus(step: number, status: StepStatus) {
    const index = state.stepStatus.findIndex(s => s.step === step);
    if (index > -1) {
      state.stepStatus = state.stepStatus.map(s => (s.step === step ? { ...s, status } : s));
    } else {
      state.stepStatus = [...state.stepStatus, { step, status }];
    }
  },
  // Haal de status van een specifieke stap op
  getStepStatus(step: number): StepStatus | undefined {
    return state.stepStatus.find(s => s.step === step)?.status;
  },
  // Haal alle stapstatussen op
  getAllStepStatus(): StepStatusMap[] {
    return state.stepStatus;
  },
  // Zet de huidige stap
  setCurrentStep(step: number) {
    state.currentStep = step;
  },
  // Haal de huidige stap op
  getCurrentStep(): number {
    return state.currentStep;
  },
};

// Exporteer de state voor directe toegang in componenten
export { state };
