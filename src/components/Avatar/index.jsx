import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

export const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-photo.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fluid} />
}
