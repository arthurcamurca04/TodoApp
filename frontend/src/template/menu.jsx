import React, {useState} from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from 'react-router-dom'

export default function Menu() {

  const [isCliked, setIsCliked] = useState(false);
  function toogleActive(){
    setIsCliked(!isCliked);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><FaCalendar/> Todo App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link onClick={toogleActive} className={isCliked ? 'nav-link active' : 'nav-link'} aria-current="page" to="/todos">Tarefas</Link>
            </li>
            <li className="nav-item">
              <Link onClick={toogleActive} className={!isCliked ? 'nav-link active' : 'nav-link'} to="/about">Sobre</Link>
            </li>
          </ul>
        </div>
      </div>
  </nav>
  );
}
