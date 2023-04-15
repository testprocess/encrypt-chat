import React from 'react';
import Provider from "./Context"
import App from "./App"

const Root = () => {
    return (
      <Provider>
        <App>

        </App>
      </Provider>

    );
};


export default Root