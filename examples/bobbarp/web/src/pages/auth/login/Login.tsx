import React from 'react';
import { GuestLayout } from 'components';
import { ArticleList, setURL } from 'slate-frontend';

setURL('login', <Login />);

export function Login() {
  return (
    <GuestLayout>
      <ArticleList />
    </GuestLayout>
  );
}
