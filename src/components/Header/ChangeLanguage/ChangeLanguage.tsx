import react, { useState, FC } from 'react';
import {ILanguage, languages} from "../../../shared/helpers";
import { Modal } from "../../Modal/Modal";
import './style.scss'

export const ChangeLanguage: FC = () => {

  const [selectedLang, setSelectedLang] = useState<string>("РУС")
  const [showModal, setShowModal] = useState<boolean>(false)

  const showChangeLanguageHandler = () => {
    setShowModal(!showModal)
    console.log(showModal)
  }
  const selectLanguageHandler = ( { id, title, showTitle }: ILanguage ) =>  {
    console.log(1)
  }

  return (
    <div className='change-language'>
      <div className='change-language-prefix'>
        <span onClick={showChangeLanguageHandler}>
          { selectedLang }
        </span>
      </div>
      { showModal && (
        <Modal showModal={showModal} onClose={showChangeLanguageHandler} >
          <ul className={`${ showModal ? `change-language-list active` : 'change-language-list' }`}>
            { languages.map((item: ILanguage) => (
              <li
                className='change-language-list-item'
                onClick={() => selectLanguageHandler( item )}>
                { item.showTitle }
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </div>
  )
}
