/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

const { actions: actionsOther } = store( 'other' );

const { state } = store( 'wpgems', {
	state: {
		get themeText() {
			return state.isDark ? state.darkText : state.lightText;
		},
	},
	actions: {
		toggleOpen() {
			const context = getContext();
			context.isOpen = ! context.isOpen;
			if ( context.isOpen ) {
				state.toggleCount++;
				// storeOther.state.toggleCount++;
			}
			actionsOther.toggleTheme();
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
