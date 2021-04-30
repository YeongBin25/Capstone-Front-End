import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom'

export function Sidebar() {
    return (
        <div className="side-bar">
            <Link to="/login" className="side-tab">Login</Link>
            <Link to="/learning" className="side-tab">학습하기</Link>
            <Link to="/notice" className="side-tab">공지사항</Link>
            <Link to="/question" className="side-tab">질문 게시판</Link>
            <Link to="/learnrecord" className="side-tab">학습 내역</Link>
            <Link to="/vulnerable" className="side-tab">취약점</Link>
            <Link to="/pointrecord" className="side-tab">포인트 내역</Link>
            <Link to="/createques" className="side-tab">생성한 문제</Link>
            <Link to="/writer" className="side-tab">작성한 글</Link>
        </div>
    );
}
