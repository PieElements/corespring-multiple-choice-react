import Checkbox from 'material-ui/Checkbox';

import CorespringFeedbackTick from './corespring-feedback-tick.jsx';
import CorespringFeedback from './corespring-feedback.jsx';


class CorespringCheckbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userValue: false,
      checked: false
    };
  }

  onCheck(el) {
    var self = this;
    this.props.onChange({
      value: this.props.value, 
      selected: el.target.checked
    });
    this.setState({userValue: !this.state.checked});
    this.setState({checked: !this.state.checked});
  }

  _checked() {
    return (this.props.correct !== undefined) ? this.props.correct : this.state.checked;
  }

  render() {
    var self = this;
    return (
      <div className="corespring-checkbox">
        <CorespringFeedbackTick correctness={self.props.correctness} />
        <div className="checkbox-holder">
          <Checkbox
            disabled={self.props.disabled}
            checked={self._checked()}
            onCheck={self.onCheck.bind(self)}
            label={this.props['display-key'] + '. ' + this.props.label} />
        </div>
        <CorespringFeedback feedback={self.props.feedback} correctness={self.props.correctness} />
      </div>
    );
  }
}

CorespringCheckbox.propTypes = {
  correct: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  'display-key': React.PropTypes.string,
  feedback: React.PropTypes.string,
  onChange: React.PropTypes.func,
  label: React.PropTypes.string,
  value: React.PropTypes.string
}

export default CorespringCheckbox