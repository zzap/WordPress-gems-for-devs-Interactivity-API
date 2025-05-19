/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

const { state: wpState } = store( 'wpgems' );

const { state } = store( 'other', {
	state: {
		"countToggles": wpState.countToggles,
		get themeText() {
			return state.isDark ? state.darkText : state.lightText;
		},
		get countToggles() {
			return wpState.countToggles;
		}
	},
	actions: {
		toggleOpen() {
			const context = getContext();
			context.isOpen = ! context.isOpen;
		},
		toggleTheme() {
			state.isDark = ! state.isDark;
		},
	},
	callbacks: {
		logIsOpen: () => {
			const { isOpen } = getContext();
			// Log the value of `isOpen` each time it changes.
			console.log( `Is open: ${ isOpen }` );
		},
	},
} );
