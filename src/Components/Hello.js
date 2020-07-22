import React from 'react'


const Hello=()=>
{
    // return <div>
    //     <h1>Hii Siva</h1>
    // </div>
    return React.createElement('div',{id:'Hellow',className:'DummyClass'},React.createElement('h1',null,'Hellow Siva'));
}

export default Hello