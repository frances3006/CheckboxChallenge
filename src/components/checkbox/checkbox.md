This is a Checkbox component without using the React native checkbox.

To import the component use:
```javascript
import { Checkbox } from 'PATH_TO_COMPONENTS/checkbox/checbox';
```
You can render the checkbox with the following props.
```javascript
<Checkbox labelText={labelName} disabled={false} onChange={checkboxChangeFunction}/>
```
* **labelText** is a mandatory string prop for the checkbox label
* **disabled** is an optional boolean prop that allows the checkbox to be disabled
* **onChange** optional function prop which provides a callback for when the checkbox is clicked

This project is using **Typescript** for the components and **CSS modules** for styling.
Tests can be found in __test__ within the checkbox folder.

The tests are configured using **Jest** and **enzyme**.