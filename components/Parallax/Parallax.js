import { useEffect, useState, useReducer } from 'react';
import styles from './Parallax.module.css'
import Page from './Page';

export default function Parallax({ children, background }) {
    const [bridgeTransform, setBridgeTransform] = useState(`translateX(${0}px) translateY(${150}px)`);
    const [skylineTransform, setSkylineTransform] = useState(`translateX(calc(${0 * 0.1}px - 20%)) scale(1.15) translateY(200px)`);
    const [_, forceUpdate] = useReducer((x) => x + 1, 0);
    useEffect(() => {
        window.onscroll = event => {
            const y = window.scrollY;
            setBridgeTransform(`translateX(${0 - (y / 2) * 0.5}px) translateY(${y * 0.5}px)`);
            setSkylineTransform(`translateX(calc(${y * 0.4 * 0.5}px - 20%)) scale(1.15) translateY(calc(${200}px - 75px))`);
        }
    }, []);
    return (
        <div style={{
            overflow: 'hidden'
        }}>
            {!background ? (
                <Page style={{
                    position: 'relative',
                    zIndex: '10',
                }}>
                    <div className={styles.title}>
                        {children}
                    </div>
                </Page>
            ) : ''}
            <Page raw={true} style={{
                zIndex: '9',
                position: 'absolute',
                bottom: '0px',
                left: '0px',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                background: 'url("/ParallaxAssets/grain.svg")',
                opacity: 0.5,
                backgroundRepeat: 'repeat',
            }}>
            </Page>
            <Page raw={true} style={{
                zIndex: '5',
                position: 'absolute',
                bottom: '0px',
                left: '0px',
                overflow: 'hidden',
                flexDirection: 'column'
            }}>
                <div style={{
                    position: 'absolute',
                    bottom: 'calc(0px - 6vw - 10px)',
                    left: '0px',
                    width: '100%',
                    overflow: 'visible',
                    transform: 'scale(1.15)'
                }}>
                    <img src="https://cloud-di09zekbt-hack-club-bot.vercel.app/1golden.png" style={{
                        width: '100%',
                        transform: bridgeTransform
                    }} />
                </div>
            </Page>
            <Page raw={true} style={{
                zIndex: '2',
                position: 'absolute',
                bottom: '0px',
                left: '0px',
                overflow: 'hidden',
                flexDirection: 'column'
            }}>
                <div style={{
                    position: 'absolute',
                    bottom: 'calc(0px - 6vw - 10px)',
                    left: '0px',
                    width: '100vw',
                    overflow: 'hidden'
                }}>
                    <img src="https://cloud-di09zekbt-hack-club-bot.vercel.app/0skyline.png" style={{
                        transform: skylineTransform,
                        width: '120%'
                    }} />
                </div>
            </Page>
            <Page raw={true} style={{
                zIndex: '1',
                position: 'absolute',
                bottom: '0px',
                left: '0px',
            }}>
                <div style={{
                    position: 'absolute',
                    bottom: '0px',
                    left: '0px',
                    background: 'linear-gradient(to top, #4481eb 0%, #04befe 100%)',
                    width: '100%',
                    height: 'calc(10vw + 75px)'
                }} />
            </Page>
            <Page raw={true} style={{
                zIndex: '1',
                position: 'absolute',
                bottom: '0px',
                left: '0px',
            }}>
                <div style={{
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    background: 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)',
                    width: '100%',
                    height: 'calc(100vh - calc(10vw + 75px))'
                }} />
            </Page>
        </div>
    );
}
