import React from 'react';
import { Link as RouterLink, type LinkProps as RouterLinkProps } from 'react-router-dom';

type LinkProps = Omit<RouterLinkProps, 'to'> & {
  href?: string;
  to?: string;
  children?: React.ReactNode;
};

export default function Link({ href, to, children, ...props }: LinkProps) {
  return (
    <RouterLink {...props} to={to ?? href ?? '#'}>
      {children}
    </RouterLink>
  );
}
