import { Heading } from 'theme-ui';
import { useState, useEffect } from 'react';
import noselect from './noselect.js'

const wait = (ms) => new Promise(resolve => setTimeout(() => resolve(), ms));

export const registrants = (() => {
    let output = [];
    for (let i = 0; i < 30; i++) {
        output.push('https://get-a-dino.hackclub.dev/dino.png?' + i);
    }
    return output;
})();

export default function Registration () {
    let [backgroundImages, setBackgroundImages] = useState(['https://get-a-dino.hackclub.dev/dino.png']);
    let [floatingDinos, setFloatingDinos] = useState([]);

    useEffect(() => {
        (async () => {
            setFloatingDinos(registrants.map((registrant, i) => ({
                src: registrant,
                x: (i % 6) / 6 * 90 + 15,
                y: Math.floor(i / 6) / 5 * 90 + 15,
            })));
            const registrationAudio = new Audio('/registration.mp3');
            registrationAudio.currentTime = 12.85;
            registrationAudio.play();
            for (let i = 0; i < 20; i++) {
                await wait(1000 * 0.85 ** (i + 1));
                console.log([ ...backgroundImages, registrants[i] ]);
                setBackgroundImages([ ...backgroundImages, registrants[i] ]);
            }
            await wait(40);
            setBackgroundImages([]);
        })();
    }, []);

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            top: '0px',
            left: '0px',
            zIndex: '1000000',
            background: 'white',
        }}>
            {backgroundImages.length ?
                <img src={backgroundImages[backgroundImages.length - 1]} style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    zIndex: '1000005',
                    transform: 'translate(-50%, -50%)',
                    objectFit: 'contain',
                    objectPosition: 'center',
                    filter: backgroundImages[0] === 'finished' ? 'opacity(0%)' : '',
                    transtion: '0.6s all'
                }} />
            :
                <div>
                    <div>
                        {floatingDinos.map(dino => {
                            return (
                                <img src={dino.src} style={{
                                    position: 'fixed',
                                    top: dino.y + '%',
                                    left: dino.x + '%',
                                    zIndex: '1000001',
                                    transform: 'translate(-50%, -50%)',
                                    objectFit: 'contain',
                                    objectPosition: 'center',
                                    maxWidth: '200px',
                                    maxHeight: '200px',
                                    ...noselect
                                }} />
                            );
                        })}
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: '100%',
                        height: '100vh'
                    }}>
                        <div style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            zIndex: '1000010',
                            transform: 'translate(-50%, -50%)',

                        }}>
                            <Heading
                            variant="headline"
                            sx={{
                                textTransform: 'uppercase',
                                color: '#0b1a2e',
                                my: 0,
                            }}
                            >
                            Dinos,
                            </Heading>
                            <Heading
                            variant="ultratitle"
                            sx={{
                                textTransform: 'uppercase',
                                pb: 4,
                                fontFamily: 'Space Grotesk',
                                color: '#fa4639',
                                WebkitTextFillColor:
                                '#fa4639' /* Will override color (regardless of order) */,
                                WebkitTextStrokeWidth: '2px',
                                WebkitTextStrokeColor: '#fa4639',
                                fontWeight: 'heavy',
                                textShadow: 'elevated',
                            }}
                            >
                            Assemble!
                            </Heading>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export const cache = async (srcArray) => {
    await Promise.all(srcArray.map(src => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            console.log(img);

            img.src = src;
            img.onload = resolve;
            img.onerror = reject;
        });
    }));
}