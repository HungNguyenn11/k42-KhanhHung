import React from 'react'

class my extends React.my{

    render(){
        let firstname = 'Hung'
        let secondname = 'Khanh'
        return(
            <>
            <div className='first'>
                hello , my name is { firstname };
            </div>
            <div>
                {secondname}
            </div>
            </>
        )
    }

}

export default my;