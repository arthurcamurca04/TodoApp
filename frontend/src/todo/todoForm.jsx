import React from "react";
import IconButton from "../template/iconButton";


export default function TodoForm(props) {
  return (
    <div>
      <form className="todoForm">
        <div className="row">
          <div className="col-xs-12 col-sm-9 col-md-10">
            <input
              id="description"
              className="form-control"
              type="text"
              placeholder="Adicione uma tarefa"
              value={props.description}
              onChange={(event) => {props.setDescription(event.target.value)}}
            />
          </div>
          <div className="col-xs-12 col-sm-3 col-md-2">
           <IconButton onClick={props.handleAdd} action="add" hide={false} styles="success"/>
          </div>
        </div>
      </form>
    </div>
  );
}
