import React from 'react';
import TypeMap from './types';

const InvalidType = () => (<span>Invalid Type</span>);

const stylesheet = {
  field: {
    display: 'table-row',
    padding: '5px',
  },
  label: {
    display: 'table-cell',
    boxSizing: 'border-box',
    verticalAlign: 'top',
    paddingRight: 5,
    paddingTop: 7,
    textAlign: 'right',
    width: 20,
    fontSize: 10,
    color: 'rgb(68, 68, 68)',
    textTransform: 'uppercase',
    fontWeight: 600,
  },
};

stylesheet.textarea = {
  ...stylesheet.input,
  height: '100px',
};

stylesheet.checkbox = {
  ...stylesheet.input,
  width: 'auto',
};

export default class PropField extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const { onChange, knob } = this.props;

    let InputType = TypeMap[knob.type] || InvalidType;

    return (
      <div style={stylesheet.field}>
        <label htmlFor={knob.name} style={stylesheet.label}>
          {`${knob.name}`}
        </label>
        <InputType
          knob={knob}
          onChange={onChange}
        />
      </div>
    );
  }
}

PropField.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  knob: React.PropTypes.object,
};
