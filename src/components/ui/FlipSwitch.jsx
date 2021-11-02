import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const FlipSwitch = ({
  isOn,
  setIsOff,
}) => (
  <>
    <div>
      {isOn
        ? (
          <>
            <button type="button" aria-label="shiny" data-testid="shiny" className="switch-background on" onClick={() => setIsOff(!isOn)}>
              <div aria-label="shiny" className="switch-on" />
            </button>
          </>
        )
        : (
          <>
            <button type="button" aria-label="shiny" data-testid="shiny" className="switch-background off" onClick={() => setIsOff(!isOn)}>
              <div aria-label="shiny" className="switch-off" />
            </button>
          </>
        )}
    </div>
  </>
);

FlipSwitch.propTypes = {
  isOn: PropTypes.bool,
  setIsOff: PropTypes.func.isRequired,
};

FlipSwitch.defaultProps = {
  isOn: false,
};

const mapStateToProps = (state) => ({ isOn: state.isShiny });

const mapDispatchToProps = (dispatch) => ({
  setIsOff: (values) => dispatch({
    type: 'SET_IS_SHINY',
    payload: values,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(FlipSwitch);
