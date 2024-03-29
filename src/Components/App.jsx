import React,{useState }from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note"
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes]= useState([]);

    function adding(newNote){
       setNotes(preNotes=>{
      return  [...preNotes,newNote];
      }) ;

    }

    function delFn(id){
setNotes(preNotes=>{
  return  preNotes.filter((note, index)=>{
        return index!==id;
    })
})
    }
    return (
      <div>
        <Header  />
        <CreateArea addFunction={adding}/>
        {notes.map((noteList,index)=>{
          return  <Note  key={index} id={index} title= {noteList.title} content= {noteList.content } del={delFn}/>
        })
          }
       
        <Footer />
      </div>
    );
  }
  
  export default App;