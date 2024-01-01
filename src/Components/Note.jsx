import React from "react";


function Note(props){

    function delFunction(){
     props.del(props.id);
    }
return <div className="note"><h1 className="noteh1">{props.title}</h1><p className="notep">{props.content}</p>  <button onClick={delFunction}>DELETE</button></div>
}

export default Note;