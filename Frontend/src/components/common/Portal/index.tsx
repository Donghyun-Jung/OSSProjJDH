import type { PropsWithChildren } from 'react';
import { useEffect, useId, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  portalId?: string;
}
const Portal = (props: PropsWithChildren<PortalProps>) => {
  const { portalId, children } = props;

  const [element, setElement] = useState<HTMLElement | null>(null);
  const id = useId();
  const elementId = portalId ?? `$portal-${id}`;

  useEffect(() => {
    let modalRoot = document.getElementById(elementId);
    if (!modalRoot) {
      modalRoot = document.createElement('div');
      modalRoot.setAttribute('id', elementId);
      document.body.appendChild(modalRoot);
    }
    setElement(modalRoot);
  }, [elementId]);

  if (!element) {
    return null;
  }

  return createPortal(children, element);
};

export default Portal;