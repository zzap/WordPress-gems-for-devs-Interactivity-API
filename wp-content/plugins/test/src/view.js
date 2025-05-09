/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

const { state: wpgemsState, actions: wpgemsActions, callbacks: wpgemsCallbacks } = store( 'wpgems' );

const { state } = store( 'other', {
	state: {
		countToggles: wpgemsState.countToggles,
		get themeText() {
			return state.isDark ? state.darkText : state.lightText;
		},
		get countToggles() {
			return wpgemsState.countToggles;
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
