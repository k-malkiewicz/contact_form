import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailValidator(): ValidatorFn {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    return (control: AbstractControl): ValidationErrors | null => {
        if (!control.value) return null;
        return emailRegex.test(control.value) ? null : { invalidEmail: true };
    }
}