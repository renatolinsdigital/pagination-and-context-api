import { ChangeEvent, KeyboardEvent, MouseEventHandler } from 'react';

export type ReactActionEvent = MouseEventHandler<HTMLButtonElement>;

export type ReactInputEvent = ChangeEvent<HTMLInputElement> & KeyboardEvent<HTMLInputElement>;

