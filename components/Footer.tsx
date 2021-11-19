import { css } from '@emotion/react'
import { NavLink } from './NavLink'

export const Footer = () => {
  return (
    <footer css={css`
      height: var(--footer-height);
      border-top: var(--border-black);
      a {
        text-decoration: none;
      }
    `}>
      {/* <NavLink passHref href="/about">
        <a>About</a>
      </NavLink> */}
      <a></a>
      <a target="_blank" href="https://docs.zora.co">Powered by Zora</a>
    </footer>
  )
}
