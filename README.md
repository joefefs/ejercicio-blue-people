# Testing the code for this React challenge.

This project was made using Create-React-App framework. To test it in a local server, clone it to a local repo by running:

`git clone  https://github.com/joefefs/bluepeople.git`

Then cd to the app directory and install packages by running `yarn`

## Testing on browser:

In the project directory, run:

### `yarn start`

This will start the app on the browser at [http://localhost:3000](http://localhost:3000) 


## My approach to the project

No external libraries to React were used except for MUI (Material UI) for the Table component and pagination. 

First, a state variable called `data` was created with a default value of an empty array. A useEffect was used to fetch the data from the API and storing it on the `data` variable.

Created a Row component that receives the fetched data as props. With the help of some MUI components, the table was created.

Added the buttons on the Row component (included extra 'cancel' button for better UI when setting the title.) The Row component has two state variables (`disabled` and `value`). `disabled` is use to disable or enable the input field to set the title, and `value` to set the value of the title.

Back on the App, the `handleSave` and `handleRemove` functions take care of the data changes and are passed as props to the Row component.

The extra state variables `page` and `rowsPerPage` are for the table pagination as per MUI docs specifications.

Lastly, the useInterval hook was created to manage the setInterval. Intervals behave weirdly in React and adding a normal Interval under the useEffect function produced strange behaviours, so the hook was created using a useRef hook also to keep track of the callback passed into the useInterval function. Another stateful variable `intervalDelay` to set the delay for the interval. This variable is initialized as 2000 (2 seconds), and is set to Null to clear the interval when the user clicks outside of the table.


