import { GroupContainerProps } from './';
import { ConfigContext, ModalOverlay } from 'slate-frontend';
import React, { useContext, useState } from 'react';

export function GroupContainer({ group }: GroupContainerProps) {
  const configContext = useContext(ConfigContext);
  const [ showModal, setModal ] = useState<boolean>(false);

  function toggleModal(): void {
    setModal(!showModal);
  }

  return (
    <>
      <img alt={`${group.name} badge`} src={`${configContext.groupBadgeURL}/${group.badge}.png`} onClick={toggleModal} style={{ cursor: 'pointer' }}/>
      <ModalOverlay header={group.name} isOpen={showModal} onToggle={toggleModal}>
        <p>Group pages are coming soon.</p>
      </ModalOverlay>
    </>
  )
}