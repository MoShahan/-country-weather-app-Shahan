import React from 'react'

function List() {



    return (

        <div className='container'>
            <table>
                <thead>
                    <tr>
                        <td> Property </td>
                        <td> Value </td>
                    </tr>
                </thead>
                <tbody>
                    {/* {newListOfItems.map((item) => (
                        <Item
                            key={item.objectID}
                            item={item}
                        />
                    ))} */}
                </tbody>
            </table>
        </div>
    )
}

export default List