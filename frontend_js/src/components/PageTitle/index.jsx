import React, {memo} from 'react'
import './PageTitle.css'

export function PageTitle(props) {

  const { title, subtitle, error } = props

  return (
    <div className={`PageTitle ${error ? "error" : ""}`}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  )
}

export default memo(PageTitle)