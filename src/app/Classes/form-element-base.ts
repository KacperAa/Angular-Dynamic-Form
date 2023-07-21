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

  order: number;
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
      order?: number;
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
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
  }
}

export class InputEl extends FormElBase<string> {
  override controlType = 'input';
}
