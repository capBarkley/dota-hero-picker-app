import React from 'react';

const SearchBox = () =>{

    const listOfAbilities = ["stun", "slow", "silence"];
    return(
        <div>
            <div>
                <input placeholder='Search hero by the name'/>
            </div>
            <div>
                <label>Skills</label>
                {
                    listOfAbilities.map(abil => {
                        return (
                            <>
                             <input type="checkbox" name={abil} value={abil}/>{abil}
                            </>
                        );
                    })
                }
                {/* <input type="checkbox" name="stun" value="stun" onChange={handleCheckChange}/>Stun
                <input type="checkbox" name="slow" value="slow" onChange={handleCheckChange}/>Slow
                <input type="checkbox" name="silence" value="silence" onChange={handleCheckChange}/>Silence */}
            </div>
        </div>
    );
}

export default SearchBox;