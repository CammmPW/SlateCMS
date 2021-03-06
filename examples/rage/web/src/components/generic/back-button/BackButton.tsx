import React from 'react';
import './BackButton.scss';
import { Icon } from 'slate-frontend';
import { RouteComponentProps, withRouter } from 'react-router-dom';

export const BackButton = withRouter(BackButtonComponent);

export function BackButtonComponent({ history }: RouteComponentProps) {
  return (
    <span className="back-button" onClick={history.goBack}>
      <Icon family="fas" type="caret-left" />
      Go Back
    </span>
  );
}
