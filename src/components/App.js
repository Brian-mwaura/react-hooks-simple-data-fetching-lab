import React, { useEffect, useState } from 'react';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [dogImage, setDogImage] = useState('');

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((res) => res.json())
            .then((data) => {
                setDogImage(data.message);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error:', error);
                setIsLoading(false);
            });
    }, []);

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <img src={dogImage} alt="A Random Dog" />
            )}
        </div>
    );
}

export default App;