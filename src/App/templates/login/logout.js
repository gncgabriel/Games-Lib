import React, { Component } from 'react';

class logout extends Component {
    constructor() {
        super();
        localStorage.setItem('isLoggedGameLib', false)
        window.open('/', '_self')
    }

}
export default logout;