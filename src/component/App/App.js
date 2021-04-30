import React from 'react';
import { Route } from 'react-router-dom'
import { Sidebar } from '../Main/Sidebar/Sidebar'
import { Login } from '../Main/Login/Login'
import { Learning } from '../Main/Learning/Learning'
import { Notice } from '../Main/Notice/Notice'
import { Question } from '../Main/Question//Question'
import { Learnrecord } from '../Main/Learnrecord/Learnrecord'
import { Vulnerable } from '../Main/Vulnerable/Vulnerable'
import { Pointrecord } from '../Main/Pointrecord/Pointrecord'
import { Createques } from '../Main/Createques/Createques'
import { Writer } from '../Main/Writer/Writer'



export function App () {
    return (
        <>
            <Route exact path="/" component={Sidebar}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/learning" component={Learning}></Route>
            <Route exact path="/notice" component={Notice}></Route>
            <Route exact path="/question" component={Question}></Route>
            <Route exact path="/learnrecord" component={Learnrecord}></Route>
            <Route exact path="/vulnerable" component={Vulnerable}></Route>
            <Route exact path="/pointrecord" component={Pointrecord}></Route>
            <Route exact path="/createques" component={Createques}></Route>
            <Route exact path="/writer" component={Writer}></Route>
        </>
    );
};
