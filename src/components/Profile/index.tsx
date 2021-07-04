import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import getThemeColor from "../../utils/getThemeColor"

import { Avatar } from "../Avatar"
import * as S from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: { name, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetaData {
      site {
        siteMetadata {
          name
          position
          description
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.5}
        to="/"
      >
        <Avatar />
        <S.ProfileAuthor>
          {name}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
