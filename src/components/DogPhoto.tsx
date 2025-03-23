import { NetworkStatus, useQuery } from "@apollo/client";
import { GET_DOG_PHOTO } from "../services/queries";


interface DogPhotoProps {
  breed: string;
}

export const DogPhoto = ({ breed }: DogPhotoProps) => {
        const { loading, error, data, refetch, networkStatus } = useQuery(GET_DOG_PHOTO, {
          variables: { breed },
        //   pollInterval: 500,
            notifyOnNetworkStatusChange: true,
            fetchPolicy: 'network-only'
        });

        const isRefetching = networkStatus === NetworkStatus.refetch;

        console.log('networkStatus', networkStatus);
      
        if (loading && !isRefetching) return (
            <div>
              Loading...        
            </div>
          );
        if (error) return `Error! ${error}`;
      
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <b>Normal</b>
                <img src={data.dog.displayImage} style={{ height: 150, width: 150 }} />
                {isRefetching && (
                    <div style={{ 
                        position: 'absolute', 
                        top: '50%', 
                        left: '50%', 
                        transform: 'translate(-50%, -50%)'
                    }}>
                        Refetching...
                    </div>
                )}
                <button onClick={() => refetch()} disabled={isRefetching}>
                    {isRefetching ? 'Fetching...' : 'Refetch new Photo!'}
                </button>
            </div>
        );
}