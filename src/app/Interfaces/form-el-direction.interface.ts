import { FormElBase } from '../Classes/form-element-base';

type Direction = 'row' | 'column';

export interface FormElDirection {
  direction: Direction;
  formElements: FormElBase<string>[];
}
