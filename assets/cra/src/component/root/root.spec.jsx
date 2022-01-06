/* eslint-disable no-shadow */

import {render, screen} from '@testing-library/react';
import Root from './root.vis.jsx';


describe('Root component', () => {

    it('renders learn react link', () => {
        render(<Root/>);
        const linkElement = screen.getByText(/learn react/ui);
        expect(linkElement).toBeInTheDocument();
    });

});
