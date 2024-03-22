

import {LoadDataModalFactory} from 'kepler.gl/components';
import LoadDataModal from '../components/load-data-modal/load-data-modal';
import {withState} from 'kepler.gl/components';

import {
  loadRemoteMap,
  loadSample,
  switchToLoadingMethod
} from '../actions';

export const CustomLoadDataModalFactory = () =>
  withState(
    [],
    state => ({...state.demo.app}),
    {
      onSwitchToLoadingMethod: switchToLoadingMethod,
      onLoadSample: loadSample,
      onLoadRemoteMap: loadRemoteMap
    }
  )(LoadDataModal);

export function replaceLoadDataModal() {
  return [LoadDataModalFactory, CustomLoadDataModalFactory];
}
