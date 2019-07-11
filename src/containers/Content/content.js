import React from 'react';
import './static/scss/content.scss'

export default class Content extends React.Component{
    render(){
        return(
            <div className={'content'}>
                <div className={'left'}>交互区域</div>
                <div className={'right'}>视频和聊天区域</div>
            </div>
        )
    }
}