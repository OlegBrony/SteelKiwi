import React                 from 'react';
import './ResultItemTable.css';
import ResultItemTableString from '../ResultItemTableString';

const ResultItemTable = (props) => (
  <table className={'result-item-table'}>
    <tbody>

    <tr className={'result-item-table-header-row'}>
      <th className={'result-item-table-header-id'}>id</th>
      <th className={'result-item-table-header-login'}>login</th>
      <th className={'result-item-table-header-url'}>url</th>
      <th className={'result-item-table-header-type'}>type</th>
    </tr>
    {props.result.map(item => (
      <ResultItemTableString
        key={item.id}
        id={item.id}
        login={item.login}
        html_url={item.html_url}
        url={item.url}/>
    ))}
    </tbody>
  </table>
);

export default ResultItemTable;



