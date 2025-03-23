import { useState, useTransition } from "react"
import { Dogs } from "./Dogs"
import { DogPhoto } from "./DogPhoto"
import { DelayedDogQuery } from "./DelayedDogQuery"
import { SuspenseDogPhoto } from "./SuspenseDogPhoto"

export const DisplayDogs = () => {
    const [dog, setDog] = useState<string>('')
    const [ isPending, startTransition ] = useTransition()
    const onDogSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
        startTransition(() => {
            setDog(event.target.value)
        })
    }
        


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginTop: '20px' }}>
            <b>Dogs</b>
            <Dogs onDogSelected={onDogSelected} />
            <b>{dog}</b>
            <div style={{ 
                display: 'flex', 
                gap: '20px', 
                width: '100%',
                justifyContent: 'center' // Center the photos
            }}>
                {isPending && <p>LoadinGGGGG...</p>}
                <div style={{ 
                    width: '300px', // Fixed width container
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    {dog && <DogPhoto breed={dog} />}
                </div>
                <div style={{ 
                    width: '300px', // Fixed width container
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    {dog && <SuspenseDogPhoto breed={dog} />}
                </div>
            </div>
            <DelayedDogQuery />
        </div>
    )
}