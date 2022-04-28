import { ReactNode } from 'react';
import { BoxProps, ReactActionEvent } from '../../models';

interface ButtonEvents {
  onClick?(event?: ReactActionEvent): void;
  onMouseDown?(event?: ReactActionEvent): void;
}

export type ButtonProps = Omit<BoxProps, "theme"> & ButtonEvents & {
  children: ReactNode;
};

export type ButtonStyledProps = BoxProps & ButtonEvents;