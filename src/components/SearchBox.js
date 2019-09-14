import React, {Fragment} from 'react';

const SearchBox = ({searchChange, onCheckboxChange}) =>{

    const listOfAbilities = ["stun", "slow", "silence"];
    return(
        <div>
            <div>
                <input placeholder='Search hero by the name' onChange={searchChange}/>
            </div>
            <div>
                <label>Skills</label>
                {
                    listOfAbilities.map((abil, i) => {
                        return (
                            <Fragment key={listOfAbilities[i]}>
                             <input type="checkbox" name={abil} value={abil} onClick={onCheckboxChange}/>{abil}
                            </Fragment>
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