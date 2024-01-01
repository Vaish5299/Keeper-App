import React, {useState} from "react";

function CreateArea(props) {
const[newNote, setNote]=useState({
    title:"",
    content:""
});

function handleChange(event){
    const {value, name}= event.target;
    setNote(preNote=>{
        return{
            ...preNote,
            [name]:value
        }
    });
      
}

function submitClick(event){
    props.addFunction(newNote);
  
    event.preventDefault();
   
    setNote({
      title:"",
      content:""
  });
}


  
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={newNote.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3"  value={newNote.content}/>
        <button onClick={submitClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;