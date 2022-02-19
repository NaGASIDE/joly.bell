import react, { useState, useMemo, FC } from 'react';
import  ReactDOM from 'react-dom'
import {ILanguage, languages} from "../../../shared/helpers";
import './style.scss'

export const ChangeLanguage: FC = () => {

  const [selectedLang, setSelectedLang] = useState<string>("РУС")
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const showMenuHendler = () => setShowMenu(!showMenu)

  return (
    <div className='change-language'>
      <div className='change-language-prefix'>
        <span onClick={showMenuHendler}>
          { selectedLang }
        </span>
      </div>
      <ChangeLanguageModal showMenu={showMenu} onClose={showMenuHendler} />
    </div>
  )
}

interface IChangeLanguageModalProps {
  showMenu: boolean;
  onClose: () => void;
}

export const ChangeLanguageModal: FC<IChangeLanguageModalProps> = ( { showMenu, onClose } ) => {

  const el = useMemo(() => document.createElement('div'), []);
  const selectLanguageHendler = ( { id, title, showTitle }: ILanguage ) =>  {
    console.log(1)
  }

  return ReactDOM.createPortal(
    <>
      {showMenu && (
        <ul className={`${ showMenu ? `change-language-list active` : 'change-language-list' }`  }>
          { languages.map((item: ILanguage) => (
            <li
              className='change-language-list-item'
              onClick={() => selectLanguageHendler( item )}>
              { item.showTitle }
            </li>
          ))}
        </ul>
      )}
    </>,
    el)
}
