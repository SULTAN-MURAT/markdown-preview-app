import React from 'react'
import {useDispatch,useSelector } from 'react-redux'
import { exampleVisibilitySelector, toggleExampleText } from '../redux/text/textSlice';
function Header() {
const dispatch=useDispatch();
const isExampleTextShown=useSelector(exampleVisibilitySelector);
  return (
    <header className='header'>
    <h1 className="app-title">Markdown Previewer</h1>
    <div
      onClick={()=>dispatch(toggleExampleText())}
      className={`help-button ${isExampleTextShown && "active"}`}
    >
      <i className="fa fa-question" aria-hidden="true"></i>
    </div>
  </header>
  )
}

export default Header