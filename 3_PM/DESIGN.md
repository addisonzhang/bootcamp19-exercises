For our app, the basic structures are:
<To Do title>: just a regular text
<TO DO list>: an unordered list of todos, if nothing displays the text (use ternary function)
    <TO DO>: has a to-do object that has a String, an unique id and a button object
<add to do>: let users add to-dos
    <input>: text input field
    <button>: submit button
<filter>: let users search for things

Data transfers:
1. Have an array of TO DO objects 
2. When user add to-dos in the input box
    1) create a new to-do object, assign new id
    2) add it to the array of TO-DO objects
    3) make a new <TO DO> component with the button and add it to the <TO DO List>
3. When user deletes from the list
    1) take the <TO DO> component out
    2) delete the to-do object from the array 
4. When the user filter
    1) create a new array of ids with just the ones that contain the substring
    2) display those <TO DO> components 
    3) if the array is empty, display the Message component with "No results found"