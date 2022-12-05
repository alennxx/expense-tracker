import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emptyTextValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const emptyText = !control.value?.trim();
      return emptyText ? {emptyText: {value: control.value}} : null;
    };
  }