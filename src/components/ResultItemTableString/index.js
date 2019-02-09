import React from 'react';
import './ResultItemTableString.css';

const ResultItemTableString = (props) => (
  <tr className={'result-item-table-row'}>
    <td className={'result-item-table-cell-id'}>{props.id}</td>
    <td className={'result-item-table-cell-login'}>{props.login}</td>
    <td className={'result-item-table-cell-html-url'} onClick={() => window.open(`${props.html_url}`)}><a href={props.html_url}>{props.html_url}</a></td>
    <td className={'result-item-table-cell-url'} onClick={() => window.open(`${props.url}`, '_self')}><a href={props.url}>{props.url}</a></td>
  </tr>
);

export default ResultItemTableString;
