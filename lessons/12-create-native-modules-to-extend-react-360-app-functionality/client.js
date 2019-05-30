// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Location, Surface, Module } from 'react-360-web';

class TitleChanger extends Module {
    constructor() {
        super('TitleChanger');
    }

    changeTitle(title) {
        document.title = 'Welcome to ' + title;
    }
}

function init(bundle, parent, options = {}) {
    const r360 = new ReactInstance(bundle, parent, {
        // Add custom options here
        fullScreen: true,
        nativeModules: [new TitleChanger()],
        ...options
    });

    const myCylinderSurface = new Surface(
        4680,
        600,
        Surface.SurfaceShape.Cylinder
    );

    // Render your app content to the default cylinder surface
    r360.renderToSurface(
        r360.createRoot('travelVR', {
            /* initial props */
        }),
        myCylinderSurface
    );

    const location = new Location([0, -1, -1]);

    r360.renderToLocation(r360.createRoot('Earth'), location);

    // Load the initial environment
    r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = { init };
