// @flow
import { connect } from 'react-redux';
import SavedModal from './SavedModal';
import { modalHide } from '../../../ducks/modals';
import { observationSelect } from '../../../ducks/observations';
import { observationSource } from '../../../ducks/observationSource';

const mapStateToProps = state => {
  return {
    selectedObservation: state.selectedObservation,
    categories: state.categories,
    gpsFormat: state.settings.gpsFormat,
    icons: state.icons,
    show: state.modals.saved
  };
};

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return {
    onHide: () => {
      dispatch(modalHide('saved'));
      dispatch(observationSelect(undefined));
      dispatch(observationSource(undefined));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedModal);
