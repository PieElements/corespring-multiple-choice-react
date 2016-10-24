import React from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { green200, green500, amber300, amber500, amber600 } from 'material-ui/styles/colors';
import CorespringMultipleChoiceReact from './corespring-multiple-choice-react.jsx';
import _ from 'lodash';

require('!style!css!less!./index.less');

class Main extends React.Component {

  onChange(opts) {
    this.props.onChange(opts);
  };

  _getMuiTheme(className) {
    if (className === 'white-on-black') {
      return getMuiTheme(darkBaseTheme, {
        correctColor: green200,
        incorrectColor: amber500,
        palette: {
          textColor: 'white'
        }
      });
    } else if (className === 'black-on-rose') {
      return getMuiTheme({
        correctColor: green500,
        incorrectColor: amber600
      });
    } else {
      return getMuiTheme({
        correctColor: green500,
        incorrectColor: amber600
      });
    }
  };

  getClass(className) {
    className = className || '';
    return `corespring-multiple-choice-react-root ${className}`
  }

  render() {

    let theme = this._getMuiTheme(this.props.model.className);

    return <div className={this.getClass(this.props.model.className)}>
      <MuiThemeProvider muiTheme={theme}>
        <CorespringMultipleChoiceReact
          model={this.props.model}
          outcomes={this.props.model.outcomes}
          correctResponse={this.props.model.config ? this.props.model.config.correctResponse : {}}
          prompt={this.props.model.prompt}
          choiceMode={this.props.model.choiceMode}
          keyMode={this.props.model.keyMode}
          choices={this.props.model.choices}
          session={this.props.session}
          mode={this.props.model.env.mode}
          onChange={this.onChange.bind(this)} />
      </MuiThemeProvider>
    </div>;
  }
}

Main.propTypes = {
  model: React.PropTypes.object,
  session: React.PropTypes.object,
  onChange: React.PropTypes.func
};

Main.defaultProps = {
  model: {},
  session: {}
}

export default Main;

