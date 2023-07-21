export class FormElBase<T> {
  value: T | undefined;
  key: string;
  label: string;
  placeholder: string;
  rules: {
    required: boolean;
    maxLength: number;
    pattern: string;
  };

  controlType: string;
  type: string;
  options: { key: string; value: string }[];

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      placeholder?: string;
      rules?: any;

      controlType?: string;
      type?: string;
      options?: { key: string; value: string }[];
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.placeholder = options.placeholder || '';
    this.rules = options.rules || {};

    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
  }
}

export class InputEl extends FormElBase<string> {
  override controlType = 'input';
}
