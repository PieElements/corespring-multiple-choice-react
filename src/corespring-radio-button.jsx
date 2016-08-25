import RadioButton from 'material-ui/RadioButton';

var CorespringFeedbackTick = require('./corespring-feedback-tick');
var CorespringFeedback = require('./corespring-feedback');

module.exports = React.createClass({
  displayName: 'CorespringRadioButton',
  
  propTypes: {
    correct: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    'display-key': React.PropTypes.string,
    feedback: React.PropTypes.string,
    onChange: React.PropTypes.func,
    label: React.PropTypes.string
  },

  getInitialState: function() {
    return {
      userValue: false,
      checked: false
    };
  },

  onCheck: function(el) {
    var self = this;
    this.props.onChange({
      value: this.props.value
    });
    this.setState({userValue: !this.state.checked});
    this.setState({checked: !this.state.checked});
  },

  selectionChanged: function(value) {
    if (this.props.value !== value) {
      this.state.checked = false;
      this.forceUpdate();
    }
  },

  _checked: function() {
    return (this.props.correct !== undefined) ? this.props.correct : this.state.checked;
  },

  render: function() {
    var self = this;
    return (
      <div className="corespring-radio-button">
        <CorespringFeedbackTick correctness={self.props.correctness} />
        <div className="checkbox-holder">
          <RadioButton
            disabled={self.props.disabled}
            checked={self._checked()}
            onCheck={self.onCheck}
            label={self.props['display-key'] + '. ' + self.props.label} />
        </div>
        <CorespringFeedback feedback={self.props.feedback} correctness={self.props.correctness} />
      </div>
    );
  }
});