import { ListType } from '../types'
import Item from './Item'
import "../styles/ListOfItems.css"

function List({ countryData }: any) {

    return (

        <div className='container'>
            <table>
                <thead>
                    <tr>
                        <td> Country </td>
                        <td> Population </td>
                        <td> Lat / Long </td>
                        <td> Country Flag </td>
                        <td> Capital City </td>
                    </tr>
                </thead>
                <tbody>
                    {countryData.map((item: any) => (
                        <Item
                            key={item.name.common}
                            name={item.name.common}
                            population={item.population}
                            latLong={item.latlng}
                            flag={item.flags.png}
                            capital={item.capital}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default List