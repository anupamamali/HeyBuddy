import React, { useState } from 'react';
import data from './data';
import List from './List';
import "./birth.scss"
function Birthday() {
    const [people, setPeople] = useState(data);
    return (
        <main className={"birthday"}>
            <section className='bcontainer'>
                <h3>{people.length} birthdays today</h3>
                <List people={people} />
                {/*<button onClick={() => setPeople([])}>clear all</button>*/}
            </section>
        </main>
    );
}

export default Birthday;
