import React, {useEffect, useState} from 'react';


export function FunctionComponentExample() {
    const [country, setCountry] = useState('India');
    const [region, setRegion] = useState('east');
    const [obj, setObj] = React.useState({
        country,
        region: 'east',
    })
    const [color, setColor] = useState( ['Red', 'green', 'blue']);
    const handleChange = (e) => {
        setCountry(e.target.value);
    }

    const updateRegion = () => {
        setObj({ region: 'west', id: 1});
    
    }

    const addColor = (value) => {
        setColor([...color, value])
    }

    useEffect(() => {
        console.log(obj);
    })

    return ( 
        <>
        <h2> Functional Component</h2>
        <div>The country value {country}</div>
        <input type="text" value = {country} onChange={handleChange}/>
        <div>The country value in obj is {obj.country}</div>
        <div>The region value is {obj.region}</div>
        <div>Color value is {color.length}</div>
        <button onClick={() =>addColor('orange')}>Add Color</button>
        <button onClick={updateRegion}>Update Region</button>
        </>
    )

}