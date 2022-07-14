import Registration from '../components/registration'
import AudioCheck from '../components/audio-check'
import { useEffect } from 'react'
import Registration, { cache, registrants } from '../components/registration'

export default () => {
  useEffect(() => {
    setTimeout(() => {
      cache(registrants);
    }, 1000);
  }, []);

  return (
    <AudioCheck>
      <Registration />
    </AudioCheck>
  );
}