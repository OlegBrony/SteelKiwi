import React                                from 'react';
import './Navigation.css';
import { Link }                             from 'react-router-dom';
import { HOME, SEARCH, NOTES }              from '../../constants/routes';
import { FontAwesomeIcon }                  from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faNotesMedical } from '@fortawesome/free-solid-svg-icons';


const Navigation = () => (
  <nav>
    <Link to={HOME} className={'nav-link'}>
      <FontAwesomeIcon icon={faHome}/>
    </Link>
    <Link to={SEARCH} className={'nav-link'}>
      <FontAwesomeIcon icon={faSearch}/>
    </Link>
    <Link to={NOTES} className={'nav-link'}>
      <FontAwesomeIcon icon={faNotesMedical}/>
    </Link>
  </nav>
);

export default Navigation;
