import React, {memo} from 'react'
import { PageTitleStyle } from './styled.module'

export function PageTitle(props: any) {

  const { title, subtitle, error } = props

  return (
    <PageTitleStyle className={`PageTitle ${error ? "error" : ""}`}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </PageTitleStyle>
  )
}

export default memo(PageTitle)