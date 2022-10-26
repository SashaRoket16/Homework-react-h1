import React from "react";
import './appStyle.css'
import './fonts/oswald.css'


const Image = function(){
    return (
   
        <img  className = "logo" alt = "" />
        
   
    
    )
}
const Image2 = function(){
    return (
   
        <img className = "logo2" alt = "" />
        
   
    
    )
}
const Image3 = function(){
    return (
   
        <img className = "img-3" alt = "" />
        
   
    
    )
}


const Header = function(){
    return (<>
     <div className="header">
     <Image></Image>
        <div className="textHed">РЕАЛИЗУЕМ КРУПНЕЙШИЕ
ПРОЕКТЫ В Украине</div>
        <div className="textHed1">стадионы, газопроводы, мосты, дамбы</div>
     </div>
        <div className="header-box">
            <div className="box1">
                <div className="textBox">26</div>
                <div className="textBox2">лет</div>
                <div className="textBox3">на рынке</div>
            </div>
            
            <div className="box2">
                <div className="textBox">26</div>
                <div className="textBox2">лет</div>
                <div className="textBox3">на рынке</div>
            </div>
            <div className="box3">
                <div className="textBox">26</div>
                <div className="textBox2">лет</div>
                <div className="textBox3">на рынке</div>
            </div>
            <div className="box4">
                <div className="textBox">26</div>
                <div className="textBox2">лет</div>
                <div className="textBox3">на рынке</div>
            </div>
           
            
        </div>
        


      </>
    )
}
const Main = function(){
    return (
        <>
        <div className="textMain">НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ</div>
        <div className="boxMain">
            <div className="boxMain1"> 
            <Image2></Image2>
            <div className="borderMain"></div>
            <div className="textMain1">Арена</div>
            <div className="textMain2">Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.</div>
            </div>
            <div className="boxMain2"> 
            <Image2></Image2>
            <div className="borderMain"></div>
            <div className="textMain1">Арена</div>
            <div className="textMain2">Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.</div>
            </div>
            <div className="boxMain3"> 
            <Image2></Image2>
            <div className="borderMain"></div>
            <div className="textMain1">Арена</div>
            <div className="textMain2">Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.</div>
            </div>
            <div className="boxMain4"> 
            <Image2></Image2>
            <div className="borderMain"></div>
            <div className="textMain1">Арена</div>
            <div className="textMain2">Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.</div>
            </div>
        </div>
        
        
        </>
    )
}
const Futer = function(){
    return(
        <>
        <div className="Futer">
            <div className="textFuter">САМЫЕ УМНЫЕ ПРОЕКТЫ</div>
            <div className="textFuter2">РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ</div>
            <div className="buttonBox">
                <input type= "button" className="button" value="ВАШ ЗАПРОС" ></input>
                <Image3></Image3>
            </div>

        </div>
        
        
        
        
        </>
    )






}
const App = function (){
    return (<>
    <Header></Header>
    <Main></Main>
    <Futer></Futer>
    
    
    
    
    
    
    </>);

//const futer = function(){};

//const main = function(){};







}
export default App