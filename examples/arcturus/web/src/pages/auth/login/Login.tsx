import React from 'react';
import { ArticleList, GuestLayout, setURL } from 'slate-frontend';

setURL('login', <Login />);

export function Login() {
  return (
    <GuestLayout>
      <ArticleList />
    </GuestLayout>
  );
}
