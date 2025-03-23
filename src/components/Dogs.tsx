import { useQuery } from "@apollo/client"
import { GET_DOGS } from "../services/queries"
import { DogItem } from "../types/types";

interface DogsProps {
  onDogSelected: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Dogs = ({ onDogSelected }: DogsProps) => {
    const { loading, error, data } = useQuery(GET_DOGS)


    if (loading) return (
      <div>
        Loading...        
      </div>
    );
    if (error) return `Error! ${error.message}`;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', width: '100%' }}>
        <select name='dog' onChange={onDogSelected} defaultValue="">
          <option value="" disabled>Select a dog...</option>
          {data.dogs.map((dog: DogItem) => (
            <option key={dog.id} value={dog.breed}>
              {dog.breed}
            </option>
          ))}
        </select>
      </div>
    )
}