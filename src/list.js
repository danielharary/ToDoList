import React, { useState } from 'react';
import './list.css';

const Test = () => {
    const [stringName, setStringName] = useState('');
    const [stringList, setStringList] = useState([]);

    const addItem = () => {
        const stringList2 = [...stringList, stringName];
        setStringList(stringList2);
        setStringName(''); // Clear input after adding item
    };

    const deleteItem = (index) => {
        const updatedList = stringList.filter((item, i) => i !== index);
        setStringList(updatedList);
    };

    return (
        <div>
            <input
                className='input'
                type='text'
                value={stringName}
                onChange={(event) => setStringName(event.target.value)}
            />
            <button className='button' onClick={addItem}>Add ToDo</button>
            <ul>
                {stringList.map((item, index) => (
                    <li className='list-item' key={index}>
                        {item}
                        <button onClick={() => deleteItem(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export { Test };
