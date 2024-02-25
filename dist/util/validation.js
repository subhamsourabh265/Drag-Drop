export const validate = (validatableInput) => {
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
//# sourceMappingURL=validation.js.map