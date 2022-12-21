import { registerRootComponent } from 'expo';
import React from 'react';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

import App from './App';
import { AppProvider } from './src/context';

const provider = () => (
    <AppProvider>
        <App/>
        <Toast/>
    </AppProvider>
)

// registerRootComponent calls AppRegistry.registerComponent('main', () => provider);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(provider);
