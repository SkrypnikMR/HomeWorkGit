const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
const React = require('react');
React.useLayoutEffect = React.useEffect;
require('enzyme').configure({ adapter: new Adapter() });
