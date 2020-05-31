import React, { useState, useEffect } from "react"

import getThemeColor from "../../utils/getThemeColor"

import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt as Search } from "@styled-icons/boxicons-regular/SearchAlt"
import { Lightbulb as Light } from "@styled-icons/fa-solid/Lightbulb"
import { Lightbulb as Dark } from "@styled-icons/fa-regular/Lightbulb"
import { Grid } from "@styled-icons/boxicons-solid/Grid"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { ThList as List } from "@styled-icons/typicons/ThList"

import * as S from "./styled"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === "dark"
  const isListMode = display === "list"

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          cover
          direction="left"
          bg={getThemeColor()}
          duration={0.5}
          to="/"
          title="Voltar para Home"
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          cover
          direction="left"
          bg={getThemeColor()}
          duration={0.5}
          to="/search/"
          title="Pesquisar"
        >
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")
          }}
          className={theme}
        >
          {isDarkMode ? <Dark /> : <Light />}
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? "grid" : "list")
          }}
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>
        <S.MenuBarItem title="Ir para o Topo">
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
