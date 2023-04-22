import React, { memo, useState } from 'react'

const Son = memo(() => {
    const [state, setState] = useState({
        name: 'a',
        age: 19
    })
    return (
        <div>Son</div>
    )
})

export default Son