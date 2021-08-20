import React, { useState, useEffect } from 'react'
import { CircularProgress } from '@material-ui/core'
import { Container } from './styles'
import apiBase from '../../services/api'

export function Loader({api,params, onFetch, ...props}) {
  const [loading, setLoading] = useState(false)
  useEffect(() => () => {
      setLoading(false)
    }, [])

  const handleClickQuery = async () => {
    setLoading(true);
    const request = {params: params}
      
    const response = await apiBase.get(api, request).then(onFetch)
    
    if(response?.status === 200 || 201) {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
  };

  return (
    <Container >
      <div className="root">
        <div className="placeholder">
          {loading === false ? (
            <>
            <CircularProgress variant="determinate" value={100} />
            </>
          ) : (
            <CircularProgress />
          )}
        </div>
        <input type="button" onClick={handleClickQuery} className="input" {...props}></input>
      </div>
    </Container>
  )
}