import photo from '/harom-majom.jpeg'

export function loadLandingPage() {
    const landingPage = document.querySelector('#app');
    const heading = document.createElement('h1');
    heading.textContent = 'Hello Majmok';

    const banner = document.createElement('img');
    banner.src = photo;
    banner.alt = 'The owners of the Három Majom bistro are sitting next to each other facing the camera.';

    const description = document.createElement('p');
    description.textContent = 'Az Ízlelő Étterem egy híres magyarországi étterem, amely az ízletes és autentikus magyar konyhájáról ismert. Az étterem elegáns belső terei és barátságos személyzete vonzza a helyi és külföldi vendégeket egyaránt.\n    Az Ízlelő Étterem menüjében számos hagyományos magyar étel található, például a gulyásleves, a rántott hús és a halászlé. Az étterem ugyanakkor kínál modern ételeket is, amelyeket az ízletes és egészséges helyi alapanyagok inspiráltak. Az étlap változatos és bőséges, így mindenki megtalálhatja a saját ízlésének megfelelő ételt.';

    landingPage.append(heading, banner, description)
}
