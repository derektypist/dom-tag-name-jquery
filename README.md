# Document Object Model (DOM) - Get Elements by Tag Name with jQuery

Similar to [Get Elements by Tag Name](https://github.com/derektypist/dom-elements-by-tag-name), but with jQuery.  Find the number of elements in a particular tag (e.g. li).  Select a random item from a particular tag and change the colour of the item.

List Items will be used.  The list items can be names of celebrities.

## UX

**Getting Started**

Select the Get Random Celebrity Button to get the number of list items (celebrities), list of celebrity and the celebrity selected at random.  Select the Reset Button to clear the information or to start again.

**User Stories**

As a user, if I select the Get Random Celebrity Button, I can get the number of list items (celebrities), list of celebrities as well as the name of the celebrity (at random).  The name of the celebrity in the list item is in a different colour.

As a user, if I select the Reset Button, I can clear the information or start again.  All list items will be coloured black.

**Information Architecture**

The list items (celebrities) are Anna Richardson, Ilaria D'Amico, Kate Garraway, Kathy Lette, Kimberly Guilfoyle, Ruth Langsford, Susanna Reid and Victoria Beckham.  All are text (strings).  The random celebrity comes from one of these celebrities.

## Features

Allows the user to get the random celebrity from the list items. Other information includes the number of list items (celebrities) as well as the array of celebrities.  The name of the selected celebrity is in a different colour.

## Technologies

Uses HTML5, CSS3, JavaScript, jQuery 3.6.3, Bootstrap 5.3.0-alpha1 and Google Fonts.

## Testing

Ensure all user stories have been met.  In the command line, enter:

`python3 -m http.server`

Select `Open Preview` to do a preview.  Select each button and check that each user story has been met.
For example, if I selected the Reset Button, I expect the information to be cleared and all list items set to black.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/dom-tag-name-jquery) at the main branch.

## Credits

### Content

Written by me.

### Acknowledgements

- [w3Schools.com](https://www.w3schools.com)
- [IT Career Switch](https://www.itcareerswitch.co.uk)