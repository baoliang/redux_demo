window.React = require('react');
window.ReactDOM = require('react-dom');
window.Root  = require('./components/containers/Root.js').default;

ReactDOM.render(<Root />, document.getElementById('root'));