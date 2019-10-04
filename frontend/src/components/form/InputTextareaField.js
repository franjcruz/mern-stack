import React, { Component } from 'react';
import { Translate } from 'react-localize-redux';

class InputTextareaField extends Component {
  render() {
    const {
      input: { onChange, ...resInput },
      id,
      label,
      placeholder,
      className,
      divClassName,
      divClassNameWarning,
      divClassNameError,
      onChangeValue,
      readOnly,
      required,
      meta: { touched, error, warning }
    } = this.props;
    return (
      <Translate>
        {({ translate }) => {
          return (
            <div className="form-group">
              <div className="row">
                <div className={`col-12 ${divClassName ? divClassName : ''}`}>
                  <label htmlFor={id}>{`${label}${required ? ' *' : ''}`}</label>
                </div>
              </div>
              <div className="row">
                <div className={`col-12 ${divClassName ? divClassName : ''}`}>
                  <textarea
                    {...resInput}
                    id={id}
                    placeholder={placeholder}
                    className={className ? className : ''}
                    style={{ resize: 'none' }}
                    readOnly={readOnly}
                    onChange={event => {
                      onChange(event);
                      if (onChangeValue) {
                        onChangeValue(event);
                      }
                    }}
                  />
                </div>
              </div>
              {touched &&
                error &&
                ((translate(error) && (
                  <div className={`col-12 has-error ${divClassNameError ? divClassNameError : ''}`}>
                    <span className="help-block">{translate(error)}</span>
                  </div>
                )) ||
                  (warning && (
                    <div className={`col-12 has-warning ${divClassNameWarning ? divClassNameWarning : ''}`}>
                      <span className="help-block">{warning}</span>
                    </div>
                  )))}
            </div>
          );
        }}
      </Translate>
    );
  }
}

export default InputTextareaField;