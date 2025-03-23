import { useSuspenseQuery } from "@apollo/client";
import { GET_DOG_PHOTO } from "../services/queries";
import { Suspense } from "react";


interface DogPhotoProps {
  breed: string;
}

const DogPhotoInner = ({ breed }: DogPhotoProps) => {
    const { error, data, refetch } = useSuspenseQuery<{ dog: { displayImage: string } }>(GET_DOG_PHOTO, {
        variables: { breed },
        fetchPolicy: 'network-only'
    });

    if (error) return `Error! ${error}`;
  
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <img src={data.dog.displayImage} style={{ height: 150, width: 150 }} />
            <button 
            onClick={() => refetch()} 
            style={{ marginTop: '8px' }}
            >
                {/* {isRefetching ? 'Fetching...' : 'Refetch Photo!'} */}
                Refetch
            </button>
        </div>
    );
}

export const SuspenseDogPhoto = ({ breed }: DogPhotoProps) => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <b>Suspense</b>
                <Suspense fallback={<div>Loading...</div>}>
                    <DogPhotoInner breed={breed} />
                </Suspense>
            </div>
        );
}