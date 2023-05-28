import { ComponentClass, FunctionComponent } from 'react';

export interface ModalProps {
  testid?: string;
  cancelLabel: string;
  confirmLabel: string;
  title?: string;
  longDesc?: string;
  primaryButtonType: string;
  icon?: string | FunctionComponent<{ addCss: string }> | ComponentClass<{ addCss: string }, any>;
  iconAddCss?: string;
}
