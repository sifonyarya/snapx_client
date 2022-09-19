import '../styles/globals.css'
import React, { createContext, useState, useEffect } from 'react';
import Store from '../store/store';

interface State {
  store: Store,
}
const store = new Store();
export const Context = createContext<State>({
  store
})
function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    if (store.isAuth) {
        store.isAuth = true;
    }
    if (localStorage.getItem('token')) {
        store.checkAuth()
    }
}, [])
  return (
    <>
      <Context.Provider value={{ store }}>
        <Component {...pageProps} />
      </Context.Provider>
    </>
  )
}
export default MyApp;