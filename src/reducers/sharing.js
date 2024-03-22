
import {handleActions} from 'redux-actions';
import {CLOUD_PROVIDERS} from '../utils/cloud-providers';
import {CLOUD_LOGIN_SUCCESS, LOAD_REMOTE_RESOURCE_ERROR, PUSHING_FILE} from '../actions';

const readAuthTokens = () => Object.keys(CLOUD_PROVIDERS)
  .reduce((tokens, name) => ({
    ...tokens,
    [name]: CLOUD_PROVIDERS[name].getAccessToken()
  }), {});

const sharingInitialState = {
  isLoading: false,
  status: null,
  info: null,
  tokens: readAuthTokens()
};

// file upload reducer
export const sharingReducer = handleActions({
  [LOAD_REMOTE_RESOURCE_ERROR]: (state, action) => ({
    ...state,
    error: action.error,
    currentOption: {dataUrl: action.url},
    isMapLoading: false
  }),
  [PUSHING_FILE]: (state, action) => ({
    ...state,
    isLoading: action.isLoading,
    info: action.metadata
  }),
  [CLOUD_LOGIN_SUCCESS]: state => ({
    ...state,
    tokens: readAuthTokens()
  })
}, sharingInitialState);

export default sharingReducer;
