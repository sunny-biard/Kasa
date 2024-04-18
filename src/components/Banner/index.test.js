import Banner from './'
import { render } from '@testing-library/react'
import { BrowserRouter as Router} from 'react-router-dom';

describe('Banner', () => {
    it('Should render without crash', async () => {
        render(
            <Router>
                <Banner />,
            </Router>
        )
    })
})