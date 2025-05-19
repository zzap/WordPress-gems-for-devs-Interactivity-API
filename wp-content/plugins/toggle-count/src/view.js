/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

const otherStore = store( 'other' );

const { state } = store( 'wpgems', {
	state: {
		// get themeText() {
		// 	return state.isDark ? state.darkText : state.lightText;
		// },
	},
	actions: {
		toggleOpenNew() {
			const context = getContext();
			context.isOpen = ! context.isOpen;
			otherStore.actions.toggleTheme();
		},
		// toggleTheme() {
		// 	state.isDark = ! state.isDark;
		// },
	},
	callbacks: {
		// logIsOpen: () => {
		// 	const { isOpen } = getContext();
		// 	// Log the value of `isOpen` each time it changes.
		// 	console.log( `Is open: ${ isOpen }` );
		// },
	},
} );
