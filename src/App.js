import './App.css';
import { useState } from 'react';


function App() {
  let[제목,setName]=useState(["0","1","2"]);
function passindextClick(){
  
}
  
  return (
    <div className="App">
      <h4 id="title">reactBlog</h4>
      <div id="root">
        <div id="left-container">
          <List></List>
          <List></List>
          <List></List>
        </div>
        <div id="right-container">
          <div id="search-and-save-container">
            <div id="inputbox"><input id="input-text" type='text'></input></div>
            <div id="save-box">
              <button id="save-button" onClick={passindextClick}>저장</button>
            </div>
          </div>
          <div id="modal">
            </div>

        </div>

      </div>
    </div>
  );
}
function List() {
  let[제목,setName]=useState(["0","1","2"]);
  let[좋아요,setLike]=useState(0);
  let[싫어요,setDislike]=useState(0);
  let[i,setindex]=useState(0);
  return (
    <div className='list'>
      <h4>{제목[{i}]}
        <span onClick={()=>{setLike(좋아요++)}}>👍</span>{좋아요}
        <span onClick={()=>{setDislike(싫어요++)}}>👎</span>{싫어요}
      </h4>
      <p className="pbox">04/01 발행</p>
      <button className="deletebox" onClick={()=>{
        document.querySelector(".list").remove();
      }}>삭제</button>
    </div>
  );
}

export default App;
