// Validation Logic
export interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export const validate = (validatableInput: Validatable) => {
  let isvalid = true;
  if (validatableInput.required) {
    isvalid = isvalid && !!validatableInput.value;
  }
  if (validatableInput.minLength != null) {
    isvalid =
      isvalid &&
      validatableInput.value.toString().length >= validatableInput.minLength;
  }
  if (validatableInput.maxLength != null) {
    isvalid =
      isvalid &&
      validatableInput.value.toString().length <= validatableInput.maxLength;
  }
  if (validatableInput.min != null) {
    isvalid = isvalid && +validatableInput.value >= validatableInput.min;
  }
  if (validatableInput.max != null) {
    isvalid = isvalid && +validatableInput.value <= validatableInput.max;
  }
  return isvalid;
};
