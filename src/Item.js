import React  from 'react';

export default function Item(props)
{
  return(
    <div>
      <div>video</div>
      <ul>
        <li>{props.itemData.title}</li>
        <li>{props.itemData.date}</li>
        <li>{props.itemData.views}</li>
      </ul>
      <div>{props.itemData.discription}</div>
    </div>
  );
}
