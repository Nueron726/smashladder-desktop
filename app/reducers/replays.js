import { CHECK_FOR_REPLAYS } from "../actions/replays";
import electronSettings from 'electron-settings';

const initialState = {
	checkForReplays: electronSettings.get('settings.checkForReplays')
};

export default (state = initialState, action) =>{
	switch(action.type){
		case CHECK_FOR_REPLAYS:
			electronSettings.set('settings.checkForReplays', action.payload);
			return {
				...state,
				checkForReplays: action.payload,
			};
		default:
			return state;
	}
}