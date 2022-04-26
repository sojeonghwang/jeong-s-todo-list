import React from 'react';
import TodoList from '../components/home/TodoList'

const Home = () => {
    return (
        <div>
            <div className="date-and-todo-count">
                <div className='date-title'>2022년 04월 26일</div>
                <div className='data-day'>화요일</div>
                <div className="remain-todo-count">남은 할 일: 0개</div>
            </div>
            <TodoList />
        </div>
    );
};

export default Home;