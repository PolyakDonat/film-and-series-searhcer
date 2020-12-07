import {AbstractControl} from "@angular/forms";
import {IInputError} from "./IInputError";

export interface IInputWithError {
  control: AbstractControl;
  errors: IInputError[];
}
