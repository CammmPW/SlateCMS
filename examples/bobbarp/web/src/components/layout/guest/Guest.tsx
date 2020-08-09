import React from 'react';
import { Footer, Header, UserLayoutProps } from 'slate-frontend';
import { GuestGuard, LoginModal, NavBar, RegisterModal } from 'components';

export function GuestLayout({ children, section, style }: UserLayoutProps) {
  return (
    <GuestGuard>
      <span className="page-container">
        <Header>
          <RegisterModal />
          <LoginModal />
        </Header>
        <NavBar />
        <main>
          <section className="page-container" data-page={section} style={style}>
            {children}
          </section>
        </main>
      </span>
      <Footer />
    </GuestGuard>
  )
}