import { Link } from 'react-router-dom'
import { CountryDetailsType } from '../types'

function Item({ name, population, latLong, flag, capital }: CountryDetailsType) {
    return (
        <tr>
            <td>{name}</td>
            <td>{population}</td>
            <td>
                <p>
                    Latitude: {latLong[0]}
                </p>
                <p>
                    Longitude: {latLong[1]}
                </p>
            </td>
            <td><img src={flag} alt="" /></td>
            <td>
                {capital.map((currCapital: any) => (
                    <Link to={`/capital/${currCapital}`}>
                        <button>
                            {currCapital}
                        </button>
                    </Link>
                ))}
            </td>
        </tr>
    )
}

export default Item