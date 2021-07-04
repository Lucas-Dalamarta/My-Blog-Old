import React from "react"
import PropTypes from "prop-types"
import ReactDisqusComments from "react-disqus-comments"

import * as S from "./styled"

const Comments = ({ url, title }) => {
  const tempURL = "lucas-dalamarta.netlify.app" //..When the og website is aired, change to the actual page
  const completeURL = `https://${tempURL}${url}`

  console.log(completeURL)
  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <ReactDisqusComments
        shortname={tempURL}
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments
