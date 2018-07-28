import React, { Component } from 'react';
import images from '../../../assets/images';

class FormStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      weight: '',
      height: '',
      bmi: '',
    };
  }
  changeInputs(value, field) {
    this.setState({ [field]: value.target.value });
  }

  onSubmit() {
    const { name, weight } = this.state;
    let { height } = this.state;
    height = height / 100;
    const bmi = weight / (height * height);
    console.log('bmi', bmi);
    this.setState({ bmi: Math.round(bmi * 100) / 100 });
  }

  onReset() {
    this.setState({
      name: '',
      weight: '',
      height: '',
      bmi: '',
    });
  }

  render() {
    const { app } = this.props;
    const { weight, height, name, bmi } = this.state;
    console.log('state', this.state);
    return (
      <div className="result">
        <div onClick={() => this.props.changeStep(1)}>
          <div className="title">
            <h1>{app.item.name}</h1>
          </div>
          <div className="bmi-test">
            <span>Your name:</span>{' '}
            <input
              value={name}
              onChange={value => this.changeInputs(value, 'name')}
              type="text"
              placeholder="Steve Luong"
            />
            <br />
            <span>Your weight: </span>
            <input
              min={0}
              value={weight}
              onChange={value => this.changeInputs(value, 'weight')}
              type="number"
              placeholder="80"
            />{' '}
            (Kg)
            <br />
            <span>Your hight: </span>
            <input
              min={0}
              value={height}
              onChange={value => this.changeInputs(value, 'height')}
              type="number"
              placeholder="175"
            />{' '}
            (Cm)
            <br />
            <span>Submit</span>
            <button onClick={() => this.onSubmit()} type="button">
              Submit
            </button>
            <button onClick={() => this.onReset()} type="button">
              Reset
            </button>
            <br />
            <div className="rank-bmi">
              {bmi !== '' && (
                <div className="image-share" id="content-image">
                  <img className="background" alt="background" src={images.background} />
                  <div className="info">
                    <h2>{name}'s result is {bmi}</h2>
                    <p>Your are obese</p>
                    <ul>
                      <li className="underweight">Under weight</li>
                      <li className="normal">Normal</li>
                      <li className="overweight">Over weight</li>
                      <li className="obese">Obese</li>
                    </ul>
                  </div>
                </div>
              )}
              {bmi !== '' && (
                <img
                  onClick={() => this.props.renderImage()}
                  className="share"
                  src={images.share}
                  alt="share"
                />
              )}

              <div id="export-image" />
            </div>
          </div>
        </div>

        <div className="des">
          <b>WTO standard:</b>
          <p>
            BMI = 0 - 18,5: Under weight<br />
            BMI = 18,5 – 24,9: Normal<br />
            BMI = 25: Over weight<br />
            BMI = 25 – 29.9: Pre obese<br />
            BMI = 30 – 34,9: Obese type I<br />
            BMI = 35 – 39.9: Obese type II<br />
            BMI = 40: Obese type III<br />
          </p>
        </div>
      </div>
    );
  }
}

export default FormStep;
