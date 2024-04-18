import Collapse from './'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom'

describe('Collapse', () => {
    it('Should render without crash', async () => {
        render(
            <Router>
                <Collapse />,
            </Router>
        )
    })

    it('Should display/hide collapsible text', () => {
        render(
            <Router>
                <Collapse />,
            </Router>
        )
        const arrow = screen.getByRole('button');
        fireEvent.click(arrow);
        expect(screen.getByTestId('CollapseMessage')).toBeInTheDocument();
        fireEvent.click(arrow);
        expect(screen.queryByTestId('CollapseMessage')).not.toBeInTheDocument();
    })
})