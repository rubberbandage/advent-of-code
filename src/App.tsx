import React, {Suspense, useState} from 'react';
import './App.css';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';

const minDate = 1;
const maxDate = 2;

function App() {
    const [date, setDate] = useState(1)
    const MyLazyLoaded = React.lazy(() => import(`./days/day-${date}/Day${date}`));

    return (
        <div className="App">
            <div className="navigation">
                <button onClick={() => setDate(date - 1)} disabled={date <= minDate}>
                    <FaChevronLeft aria-label={`View date ${date - 1}`}/>
                </button>
                <button onClick={() => setDate(date + 1)} disabled={date >= maxDate}>
                    <FaChevronRight aria-label={`View date ${date + 1}`}/>
                </button>
            </div>
            <div className="title">
                <a
                    className="App-link"
                    href={`https://adventofcode.com/2022/day/${date}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h1>Advent of Code - Day {date}</h1>
                </a>
            </div>
            <div className="content">
                <Suspense fallback={<div>Loading...</div>}>
                    <MyLazyLoaded/>
                </Suspense>
            </div>
        </div>
    );
}

export default App;
