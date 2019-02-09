import React from 'react';
import './ResultItemCard.css';
import {} from 'semantic-ui-react'

const ResultItem = (props) => (
  <div className={'result-item-card'}>
    <p className={'result-item-card-id'}>id: {props.id}</p>
    <p className={'result-item-card-login'}>login: {props.login}</p>
    <p className={'result-item-card-html-url'}>link: <a href={props.html_url} target={'_blank'}>{props.html_url}</a></p>
    <p className={'result-item-card-url'}>detail: <a href={`/user/${props.login}`}>{props.url}</a></p>
  </div>
);

export default ResultItem;
