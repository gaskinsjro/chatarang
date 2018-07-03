import React, { Component } from 'react'

import './App.css'
import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component{
    render(){
        return(
            <div className="Main" style={styles}>
            <Sidebar/>
            <Chat/>
            </div>
        )
    }
}

const styles = {
    display: 'flex',
    allignItems: 'strecth',
    height:'100vh',
}

export default Main