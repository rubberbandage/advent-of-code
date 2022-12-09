import React, {Suspense, useState} from 'react';
import './App.css';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import {IconButton} from "./components/IconButton";

const minDate = 1;
const maxDate = 2;

function App() {
    const [date, setDate] = useState(1)
    const MyLazyLoaded = React.lazy(() => import(`./days/day-${date}/Day${date}`));

    return (
        <div className="App">
            <div className="navigation">
                <IconButton Icon={FaChevronLeft}
                            ariaLabel={`View date ${date - 1}`}
                            onClick={() => setDate(date - 1)}
                            disabled={date <= minDate}/>
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
                <IconButton Icon={FaChevronRight}
                            ariaLabel={`View date ${date + 1}`}
                            onClick={() => setDate(date + 1)}
                            disabled={date >= maxDate}/>
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
