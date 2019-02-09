import React    from 'react';
import './ResultItemTableString.css';
import { Link } from 'react-router-dom';


const ResultItemTableString = (props) => (
  <tr className={'result-item-table-row'}>
    <td className={'result-item-table-cell-id'}>{props.id}</td>
    <td className={'result-item-table-cell-login'}>{props.login}</td>
    <td className={'result-item-table-cell-html-url'}
        onClick={() => window.open(`${props.html_url}`)}>
      <a href={props.html_url}>{props.html_url}</a>
    </td>
    <td className={'result-item-table-cell-url'}>
      <Link to={`/user/${props.login}`} className={'my-link'}>{props.url}</Link>
    </td>
  </tr>
);


export default ResultItemTableString;
