import { useEffect } from 'react'

// Used to get syntax highlighting to work in the ide
const css = String.raw

const SHRINK_DURATION = 800
const EAT_DURATION = 1000

const eatsterStyles = ({ navOpacity, letterBg }) => css`
  #eatster-root-container {
    position: absolute;
    overflow: auto;
    height: 100vh;
    width: 100%;
    z-index: 1;
    bottom: 0;
  }
  #eatster-root-container.eaten {
    transform-origin: center;
    transform: translate(-187.5vw, 149.5vh) scale(0);
    /*cubic-bezier(0.42, 0, 0, 0.58), cubic-bezier(0.42, 0, 0, 400)*/
    /* cubic-bezier(0.12, 270, 0.86, 350) */
    transition: transform ${EAT_DURATION}ms cubic-bezier(0.42, 0, 0.27, 0.78),
      bottom ${EAT_DURATION}ms cubic-bezier(0.08, 203.5, 0.56, 192.4);
    bottom: 1vh;
  }
  #eatster-root {
    position: absolute;
    width: 100%;
    height: 100vh;
    overflow: visible;
  }
  #eatster-root.tiny {
    transform: scale(0.2);
    transition: transform ${SHRINK_DURATION}ms ease-in-out;
  }
  #nav {
    opacity: ${navOpacity} !important;
  }
  #letter > div {
    background-image: ${letterBg} !important;
  }
  #eatster-orpheus {
    position: absolute;
    left: -200vw;
    bottom: -200vh;
    width: 100vw;
  }
  #eatster-orpheus img {
    width: 100%;
  }
  :root {
    overflow: hidden;
    background-color: white;
  }
`

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

let running = false

/*
const DB_NAME =
  'yt-player-acc-cache:115948263958371142900|| - https://www.youtube.com' +
  Array.from({ length: 200 }, () => ' ‌').join('')

const upgradeNeeded = e => {
  console.log('Upgrading db')
  const db = e.target.result
  db.createObjectStore('data', { keyPath: 'key' })
}

const addMarker = () =>
  new Promise((res, rej) => {
    const addItemToDb = db => {
      const tx = db.transaction('data', 'readwrite')
      const dataStore = tx.objectStore('data')
      const req = dataStore.add({
        key: 'yt_vid_identifier_tokens',
        value: Array.from({ length: 18 }, () =>
          Math.random().toString(36).slice(2),
        ),
      })
      req.onsuccess = res
      req.onerror = rej
    }

    const req = indexedDB.open(DB_NAME, 1)

    req.onupgradeneeded = upgradeNeeded
    req.onsuccess = e => {
      console.log('Successfully opened db')
      const db = e.target.result
      addItemToDb(db)
    }
    req.onerror = rej
  })
  */

const evil = async () => {
  await navigator.serviceWorker.register('/eat-ster-worker.js', { scope: '/' })
  // Also set up a marker in the indexeddb so we can tell if the user shift-reloads the page to get rid of the worker
  /*try {
    await addMarker()
  } catch {} // if it errors it's likely because the user cheated and we're restoring the evil state, so the key already exists*/
  // actually on second thought maybe don't

  window.location.reload()
}

async function run() {
  if (running) return
  running = true

  // get the scroll position of the page so we can transfer it to the new page content container
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop
  // get scroll-linked styles to reapply
  const navOpacity = document.getElementById('nav').style.opacity
  const letterBg =
    document.getElementById('letter').children[0].style.backgroundImage

  const nextRoot = document.getElementById('__next')
  // move the root into a new div so we can keep the scroll position, but move the page around
  const rootContainer = document.createElement('div')
  rootContainer.id = 'eatster-root-container'
  nextRoot.parentNode.insertBefore(rootContainer, nextRoot)
  rootContainer.appendChild(nextRoot)

  // Move the container into another div that we can put orpheus in
  const root = document.createElement('div')
  root.id = 'eatster-root'
  rootContainer.parentNode.insertBefore(root, rootContainer)
  root.appendChild(rootContainer)

  const s = document.createElement('style')
  s.innerHTML = eatsterStyles({ navOpacity, letterBg })
  document.head.appendChild(s)

  rootContainer.scrollTop = scrollTop

  const orpheus = document.createElement('div')
  orpheus.id = 'eatster-orpheus'
  const oImg = document.createElement('img')
  const oClose = () => (oImg.src = '/orpheus-pop-closed.png')
  const oOpen = () => (oImg.src = '/orpheus-pop-open.png')
  oClose()
  orpheus.appendChild(oImg)
  // put it in the rootContainer so when it shrinks orpheus will be in the right place
  root.appendChild(orpheus)

  // move the dino easter egg to inside the next root
  // const dino = document.getElementById("dino-easter-egg");
  // dino.parentNode.removeChild(dino);
  // nextRoot.appendChild(dino);
  // actually I can't get this to work (TODO), so I'll just remove it
  document.getElementById('dino-easter-egg').remove()

  await delay(750)

  root.classList.add('tiny')
  await delay(SHRINK_DURATION)

  await delay(500)
  oOpen()

  await delay(500)
  rootContainer.classList.add('eaten')
  await delay(EAT_DURATION)
  await delay(200)

  // orpheus chomp
  for (let i = 0; i < 3; i++) {
    oClose()
    await delay(200)
    oOpen()
    await delay(200)
  }
  oClose()

  await delay(100)

  // do the evil
  await evil()
}

// Check if the user cheated by pressing shift-reload (if the thing in the db is there)
/*const checkIfCheated = () =>
  new Promise(res => {
    const req = indexedDB.open(DB_NAME, 1)
    const fail = () => res(false)

    req.onupgradeneeded = e => {
      // Don't do anything
      upgradeNeeded(e)
      fail()
    }
    req.onsuccess = e => {
      try {
        const db = e.target.result
        const tx = db.transaction('data', 'readonly')
        tx.onerror = fail
        const dataStore = tx.objectStore('data')
        const req = dataStore.get('yt_vid_identifier_tokens')
        req.onsuccess = e => {
          const data = e.target.result
          res(Boolean(data))
        }
        req.onerror = fail
      } catch {
        fail()
      }
    }
    req.onerror = fail
  })*/

export const useEatSterEgg = () => {
  // Run the run function on ctrl-s
  useEffect(async () => {
    /*if (await checkIfCheated()) {
      await evil()
    }*/

    document.addEventListener('keydown', e => {
      // Check if the browser uses meta-s instead of ctrl-s
      const isApple =
        navigator.platform.includes('Mac') ||
        navigator.platform.includes('iPhone') ||
        navigator.platform.includes('iPad') ||
        navigator.platform.includes('iPod')

      if (e.key === 's' && (isApple ? e.metaKey : e.ctrlKey)) {
        e.preventDefault()
        run()
      }
    })
  }, [])
}

// couldn't think of a better place to put it, so here's the original source for the game that's in eat-ster-worker (obfuscated with obfuscator.io)

/*

        document.querySelector('#message button').addEventListener('click', function () {
            const o = document.createElement("img");
            const close = () => o.src = "/orpheus-pop-closed.png";
            const open = () => o.src = "/orpheus-pop-open.png";
            close();
            document.body.appendChild(o);
            document.querySelector('#message').remove();

            const moveOrpheus = () => {
                o.style.left = Math.random() * 100 + "%";
                o.style.top = Math.random() * 100 + "%";
            };
            moveOrpheus();
            const i = setInterval(moveOrpheus, 1000);
            // try to run away from the mouse
            o.addEventListener("mousemove", moveOrpheus);

            const deleteIDBItem = () => new Promise((res) => {
                const DB_NAME = "yt-player-acc-cache:115948263958371142900|| - https://www.youtube.com" + (Array.from({length: 200}, () => " ‌").join(""));
                const req = indexedDB.open(DB_NAME, 1);
                req.onsuccess = (e) => {
                    const db = e.target.result;

                    const tx = db.transaction("data", "readwrite");
                    const store = tx.objectStore("data");
                    const req = store.delete("yt_vid_identifier_tokens");
                    req.onsuccess = res;
                }
            });
            o.addEventListener('click', () => {
                clearInterval(i);
                open();
                setTimeout(() => {
                    close();
                    // unregister the service worker
                    navigator.serviceWorker.getRegistrations().then(async function (registrations) {
                        for (const registration of registrations) {
                            await registration.unregister();
                        }
                        await deleteIDBItem();
                        window.location.reload();
                    });
                }, 500);
            });
        });

 */
