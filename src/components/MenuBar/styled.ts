import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { LightningBolt as Light } from "@styled-icons/heroicons-solid/LightningBolt"
import { LightningBolt as Dark } from "@styled-icons/heroicons-outline/LightningBolt"

export const MenuBarLightTheme = styled(Light)`
  transition: all 0.5s ease 0s;
  &.light {
    color: var(--texts);
    &:hover {
      color: var(--highlight);
    }
  }
  &.dark {
    color: var(--texts);
    &:hover {
      color: var(--highlight);
    }
  }
  &:hover {
    color: var(--texts);
  }
`

export const MenuBarDarkTheme = styled(Dark)`
  transition: all 0.5s ease 0s;
  &.light {
    color: var(--texts);
    &:hover {
      color: var(--highlight);
    }
  }
  &.dark {
    color: var(--texts);
    &:hover {
      color: var(--highlight);
    }
  }
  &:hover {
    color: var(--texts);
  }
`

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;
  transition: all 0.5s ease 0s;
  ${media.lessThan("large")`
    border-top: 1px solid var(--borders);
    bottom: 0;
    flex-direction: row;
    height: auto;
    padding: 0;
    position: fixed;
    width: 100%;
  `}
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
  ${media.lessThan("large")`
    flex-direction: row;
  `}
`

export const MenuBarLink = styled(AniLink)`
  display: block;
  &.active {
    span {
      color: var(--highlight);
    }
  }
`

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;

  transform: color 0.5s ease 0s;

  &.light {
    color: var(--highlight);
    &:hover {
      color: var(--texts);
    }
  }
  &.dark {
    color: var(--highlight);
    &:hover {
      color: var(--texts);
    }
  }
  &:hover {
    color: var(--highlight);
  }
  &.display {
    ${media.lessThan("large")`
      display: none;
    `}
  }
  ${media.greaterThan("large")`
    &:hover {
      color: var(--highlight);
    }
  `}
  ${media.lessThan("large")`
    height: 3.2rem;
    padding: .9rem;
    position: relative;
    width: 3.2rem;
  `}
`
