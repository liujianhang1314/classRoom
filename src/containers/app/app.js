import React from 'react';
import Content from '../Content/content.js'
export default class App extends React.Component{
     render(){
         return(
             <div className={'app'} style={{width:'100%', height:'100%', position:'relative'}}>
                 <div className={'header'} style={{width:'100%', height:'90px', border:'1px solid'}}>header</div>
                 <Content />
             </div>
         )
     }
 }