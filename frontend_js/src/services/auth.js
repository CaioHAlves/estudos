const TOKEN_KEY = "@user_token"

export const isAuthenticated = () => {

  const currentToken = localStorage.getItem(TOKEN_KEY) !== null ? localStorage.getItem(TOKEN_KEY) : ''
  const validatesJwtToken = new RegExp('[A-Za-z0-9\-\._~\+\/]+=*') //eslint-disable-line

  if (validatesJwtToken.test(currentToken)) return true

  return false
}

export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const log = token => localStorage.setItem(TOKEN_KEY, token)

export const destroySession = () => localStorage.removeItem(TOKEN_KEY)

export const signout = () => {
  destroySession()
  window.location.href = '/'
}

export const decodesToken = token => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

export const decoded = decodesToken(getToken())