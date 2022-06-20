import {GlobalStyle} from '../src/styles';

export const parameters = {
	actions: {argTypesRegex: '^on[A-Z].*'},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

// wird immer verwendet von Story Book, sie importen den Globalstyle mit
export const decorators = [
	Story => (
		<>
			<GlobalStyle />
			<Story />
		</>
	),
];
