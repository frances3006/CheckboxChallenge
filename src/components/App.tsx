
import * as React from "react";
import { Checkbox } from './checkbox/checbox';

export class App extends React.Component<{}, {}> {

    checkboxChange = (label: string) => {
        console.log(`I was clicked ${label}`)
    }
    
    render() {
        return <div>
            <h1>Checkbox</h1>

            <Checkbox 
                labelText="Checkbox label"
                disabled={false} 
                onChange={this.checkboxChange}/>
        </div>;
    }
}