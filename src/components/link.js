/** @jsx jsx */
import { jsx, NavLink as MenuLink, Link as A } from 'theme-ui';
import NextLink from 'next/link';

export function NavLink({ path, label, children, ...otherProps }) {
  return (
    <h1>NavLink</h1>
  );
}

export function Link({ path, label, children, ...otherProps }) {
  return (
    <A {...otherProps} href={path}>
      {children || label}
    </A>
  );
}
