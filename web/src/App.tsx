import React from 'react';

import { 
    GlobalStyles 
} from 'styles/global';

import {
    debugData
} from 'utils/debugData';

debugData([
    {
        action: 'setVisible',
        data: true,
    }
])

const App: React.FC = () => {
    return (
        <React.Fragment>
            <GlobalStyles/>

            {/* Componente */}
        </React.Fragment>
    )
}

export default App;