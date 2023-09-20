import React from "react";
import { ReactDOM } from "react-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Article from "./components/Article";
import Section from "./components/Section";

function App (){
  return (
    <div>
      <Header/>
      <Main/>
      <Article/>

      <div className="w-full">
      <div className="container mx-auto grid grid-cols-3 gap-3">
        
      <Section
      img= "./person1.png"
      btntext="SOLD OUT"
      star={5.0}
      reviews={6}
      desc="Life lessons with Katie Zaferes"
      cost={136}
      />

      <Section 
      img="./person2.png"
      btntext="ONLINE"
      star={5.0}
      reviews={30}
      desc="Learn wedding photography"
      cost={125}
      />

      <Section
      img="./person3.png"
      star={4.8}
      reviews={2}
      desc="Group Mountain Biking"
      cost={50}
      />
      </div>
      </div>
    </div>
  )
}

export default App