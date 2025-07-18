import React, { useState } from 'react'

const TextForm = () => {
    let valmap = {
        'A': 1,
        'I': 1,
        'J': 1,
        'Q': 1,
        'Y': 1,
        'B': 2,
        'K': 2,
        'R': 2,
        'C': 3,
        'G': 3,
        'L': 3,
        'S': 3,
        'D': 4,
        'M': 4,
        'T': 4,
        'H': 5,
        'E': 5,
        'N': 5,
        'X': 5,
        'U': 6,
        'V': 6,
        'W': 6,
        'O': 7,
        'Z': 7,
        'P': 8,
        'F': 8
    };
    let [sum, setSum] = useState(0);
    let [finSum, setFinalSum] = useState(0);

    let [name, setName] = useState("");
    let [error, setError] = useState("");
    const handleOnChange = (event) => {
        setName(event.target.value);
        setError("");
    }

    const handleSum = () => {
        if (!/^[a-zA-Z]+$/.test(name)) {
            setError("Please enter only alphabetic characters without spaces.");
            return;
        }
        let count = 0;
        for (let i of name) {
            count += valmap[i.toUpperCase()];
        }
        setSum(count);
        let numstr = count.toString();
        let finalSum = 0;
        for (let i of numstr) {
            finalSum += parseInt(i);
        }
        setFinalSum(finalSum);
    }

    return (
        <div className="mb-3">
            <input type="text" className="form-control mt-3" value={name} onChange={handleOnChange} id="nameControlInput1" placeholder="Enter name here" />
            <button className='btn btn-primary my-3' onClick={handleSum}>Calculate</button>
            {error && <div className="text-danger">{error}</div>}
            <h2>Number: {sum}</h2>
            <h2>Magic Number: {finSum}</h2>
        </div>
    )
}

export default TextForm
