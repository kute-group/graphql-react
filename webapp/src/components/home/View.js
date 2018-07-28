// Imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import domtoimage from 'dom-to-image';

// App Imports
import { routes } from '../../setup/routes';
import { get, getList } from './api/actions';
import Loading from '../common/Loading';
import Item from './Item';
import GreetingStep from './MainProcess/GreetingStep';
import FormStep from './MainProcess/FormStep';

// Component
class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
    };
  }
  componentDidMount() {
    this.props.getList();
    this.props.get(this.props.match.params.id);
  }

  changeStep(step) {
    this.setState({ step });
  }

  renderImage() {
    var imageContent = document.getElementById('content-image');
    domtoimage
      .toPng(imageContent)
      .then(function(dataUrl) {
        var img = new Image();

        img.src = dataUrl;
        console.log(img, 'dataUrl');
        var imageExport = document.getElementById('export-image');
        imageExport.innerHTML = "<img src='" + dataUrl + "' />";
      })
      .catch(function(error) {
        console.error('oops, something went wrong!', error);
      });
  }
  renderMain(app) {
    const { step } = this.state;
    if (step === 0)
      return (
        <GreetingStep app={app} changeStep={step => this.changeStep(step)} />
      );
    if (step === 1)
      return (
        <FormStep
          app={app}
          changeStep={step => this.changeStep(step)}
          renderImage={() => this.renderImage()}
        />
      );
    else return <GreetingStep />;
  }

  render() {
    const { app, apps } = this.props;

    return (
      <div className="wrap">
        <div className="detail-app">
          <div className="left">
            {/* Single apps */}
            <div className="detail">
              {this.props.app.isLoading ? (
                <Loading message="Loading..." />
              ) : this.props.app.item.id > 0 ? (
                this.renderMain(app)
              ) : (
                <p>app does not exists.</p>
              )}
            </div>
            <div className="list-apps">
              <h2>You may also Like:</h2>
              {apps.isLoading ? (
                <Loading message="Loading data..." />
              ) : apps.list && apps.list.length > 0 ? (
                apps.list.map((item, index) => <Item item={item} key={index} />)
              ) : (
                <p>No apps to show.</p>
              )}
            </div>
          </div>
          <div className="right sidebar">
            {apps.isLoading ? (
              <Loading message="Loading data..." />
            ) : apps.list && apps.list.length > 0 ? (
              apps.list.map((item, index) => <Item item={item} key={index} />)
            ) : (
              <p>No apps to show.</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

// Component Properties
View.propTypes = {
  app: PropTypes.object.isRequired,
  get: PropTypes.func.isRequired,
  getList: PropTypes.func.isRequired,
};

// Component State
function viewState(state) {
  return {
    app: state.app,
    apps: state.apps,
  };
}

export default connect(
  viewState,
  { get, getList },
)(View);
