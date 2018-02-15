
import * as React from "react";
import * as styles from './checkbox.css';
import * as cn from 'classnames';

interface IProps { 
    labelText: string;
    disabled?: boolean;
    onChange?: (label: string) => any;
};

interface IState {
    checkStyle: string;
    clicked: boolean
};

export class Checkbox extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            checkStyle: styles.checkbox,
            clicked: false
        }
    }

    onClick = (event: any) => {
        if(!this.props.disabled) {
          this.setState({
            checkStyle: this.state.clicked ? styles.checkbox : cn(styles.checkbox, styles.checkboxChecked),
            clicked: !this.state.clicked
          });
          if(this.props.onChange) {
            this.props.onChange(this.props.labelText);
          }
        }
      }
    
      mouseEnter = (event: any) => {
        if(!this.props.disabled) {
            this.setState({
                checkStyle: cn(styles.checkbox, styles.checkboxEnter)
              })
        }    
      }
    
      mouseLeave = (event: any) => {
        this.setState({
            checkStyle: this.state.clicked ? cn(styles.checkbox, styles.checkboxChecked) : styles.checkbox
        })
      }
    
      render() {
        const { checkStyle } = this.state;
        const checkboxClass = this.props.disabled ? 
          cn(checkStyle, styles.checkboxDisabled ) : 
          cn(checkStyle);

        const wrapperClass = this.props.disabled ? 
          cn(styles.wrapper, styles.wrapperDisabled) : styles.wrapper; 
        return (
          <label 
            className={wrapperClass}
            onClick={this.onClick} 
            onMouseEnter={this.mouseEnter}
            onMouseLeave={this.mouseLeave}>
              <div className={checkboxClass}/>
              {this.props.labelText}
          </label>
            
        );
      }

}