import { useEffect, useState, createContext, ReactNode } from 'react'
import Cookies from 'js-cookie';

import EN from '../locales/en/en.json'
import PT from '../locales/pt/pt.json'

type KEY = 'EN' | 'PT'
type LangContextData = {
  lang: KEY;
  scoped: typeof EN | typeof PT;
  changeLang: (lang: KEY) => void;
}

export const LangContext = createContext({} as LangContextData);

const LANGS = {
  'EN': EN,
  'PT': PT,
}

type LangProviderProps = {
  children: ReactNode
}

export function LangProvider({ children }: LangProviderProps) {

  const [lang, setLang] = useState<KEY>('EN');
  const [scoped, setScoped] = useState(LANGS[lang])

  useEffect(() => {
    const currentLang = Cookies.get('lang');
    if (!currentLang) {
      Cookies.set('lang', lang);
    } else {
      setLang(currentLang as KEY);
      setScoped(LANGS[currentLang])
    }
  }, []);


  function changeLang(value: KEY) {
    setLang(value);
    Cookies.set('lang', value);
    setScoped(LANGS[value])
  }

  return (
    <LangContext.Provider value={{ lang, scoped, changeLang }}>
      {children}
    </LangContext.Provider>
  )
}