// @flow

import { connect } from 'react-redux';
import { values } from 'lodash';
import type { Dispatch } from 'redux';
import { StoreState } from '../../../types/redux';
import {
  syncAnnounce,
  syncStart,
  deviceList,
  deviceSelect,
  deviceToggleSelect,
  deviceSyncUpdate
} from '../../../ducks/devices';
import { modalShow, modalHide } from '../../../ducks/modals';
import SyncView from './SyncView';
import type { StateProps, DispatchProps } from './SyncView';

function mapStateToProps(state: StoreState): StateProps {
  return {
    devices: values(state.devices),
    selectedDevice: state.selectedDevice,
    syncedModalVisible: state.modals.synced
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    deviceList: () => dispatch(deviceList()),
    announceSync: () => dispatch(syncAnnounce()),
    startSync: device => dispatch(syncStart(device)),
    selectDevice: device => dispatch(deviceSelect(device)),
    toggleDeviceSelect: device => dispatch(deviceToggleSelect(device)),
    updateDeviceSync: device => {
      dispatch(deviceSelect(device));
      dispatch(deviceSyncUpdate(device));
    },
    showSyncedModal: () => dispatch(modalShow('synced')),
    hideSyncedModal: () => dispatch(modalHide('synced'))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SyncView);
