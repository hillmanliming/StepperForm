import { createStore } from '@stencil/store';

const { state, onChange } = createStore({
  data: {} as { [key: string]: string },
  stepStatus: [] as ('inactive' | 'active' | 'completed')[], // Track step statuses
  currentStep: 0, // Add currentStep to the global store
});

export { state, onChange }; // Export both state and onChange

export const formDataStore = {
  setField(name: string, value: string) {
    state.data[name] = value;
  },

  getAllFields() {
    return state.data;
  },

  updateStepStatus(step: number, status: 'inactive' | 'active' | 'completed') {
    const updatedStatus = [...state.stepStatus];
    updatedStatus[step] = status;
    state.stepStatus = updatedStatus; // Trigger reactivity
  },

  getStepStatus() {
    return state.stepStatus;
  },

  setCurrentStep(step: number) {
    state.currentStep = step; // Update the current step
  },

  getCurrentStep() {
    return state.currentStep; // Retrieve the current step
  },
};
