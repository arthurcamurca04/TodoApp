import React from 'react';
import { FaPlus, FaTrash } from "react-icons/fa";

export default function IconButton(props){
  if(props.hide){
    return null;
  }else{
    return(
      <button className={'btn btn-'+props.styles} onClick={props.onClick}> 
      {props.action === 'add' ? <FaPlus/> : ''}
      {props.action === 'delete' ? <FaTrash/> : ''}
    </button>
    )
  }  
}