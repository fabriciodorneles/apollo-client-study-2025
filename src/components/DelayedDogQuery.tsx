import { useLazyQuery } from "@apollo/client";
import { GET_DOG_PHOTO } from "../services/queries";

export const DelayedDogQuery = () => {

const [getDog, { loading,error,data }] = useLazyQuery(GET_DOG_PHOTO)

if (loading) return <p>Loading...</p>
if (error) return <p>`Error :( - ${error.message}`</p>

return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <button onClick={() => getDog({ variables: { breed: 'bulldog' } })}>
            Fetch BullDog Photo
        </button>
        {data && data.dog && (
            <img src={data.dog.displayImage} style={{ height: 150, width: 150 }} />
        )}
    </div>
)

}