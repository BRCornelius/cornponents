import { FC } from 'react';
import { IDisplayButtonProps } from '../../interfaces';

export const DisplayButton: FC<IDisplayButtonProps> = props => <div>
    {props.children}
    <button>{props.buttonLabel}</button>
</div>