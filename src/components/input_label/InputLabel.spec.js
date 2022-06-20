import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import InputLabel from './';

describe('Button component', () => {
	it('should render children', () => {
		const text = 'I am a label';
		render(<InputLabel>{text}</InputLabel>);
		const button = screen.getByText(text);
		expect(button).toBeInTheDocument();
	});
});
