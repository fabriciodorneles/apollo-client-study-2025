import { useQuery } from "@apollo/client"
import { GET_LOCATIONS } from "../services/queries"
import { LocationItem } from "../types/types"

export const DisplayLocations = () => {
    const { loading, error, data } = useQuery(GET_LOCATIONS)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        {data.locations.map(({ id, name, description, photo }: LocationItem) => (
          <div key={id}>
            <h3>{name}</h3>
            <img width="400" height="250" alt="location-reference" src={`${photo}`} />
            <br />
            <b>About this location:</b>
            <div style={{ padding: '20px' }}>
              <p>{description}</p>
            </div>
          <br />
          </div>
        ))}
        </div>
    )
}