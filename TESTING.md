# Lighthouse Test 

The Lighthouse test was very good. 

## Desktop

<img src="assets/images/lighthouse-desktop.png">

## Mobile

<img src="assets/images/lighthouse-mobile.png">


# Validator testing 

## HTML 

There were no errors found on HTML. 

<img src="assets/images/html-validator.png">


## CSS

No errors on the W3C jigsaw validator

<img src="assets/images/css-validator.png">

## JavaScript 

no errors on jshint

<img src="assets/images/js-validator.png">

# Testing User Stories 

As a GM/player, I want to supplement my game with mythic without the need for flipping through pages to find information.
- The user forgets a rule. Click how to modal. Use the table of contents to quickly navigate to the desired location.  
- The app tells the user a character or thread is involved in the next action. The app selects this automatically. No extra effort from the user whatsoever. 


As a GM/player, I want to use mythic without all of the usually involved bookkeeping.
- The user wants to delete a scene or list. The user clicks the "x" button and the list or scene is automatically updated. 
- If a value from a list is referenced, the app will automatically select a value and return it to the user. There is no need to check and choose manually. 


As a player, I want a GM tool that can replace my group’s GM if they can not arrive at a session.
- The player can use Mythic as a GM and play an adventure without preparing anything. The scene button will check if anything random happens. 
- The question button will answer any yes/no questions the player has about the environment/situation. 
- The event button will give the player ideas as to the plot of the story.

As a GM/player, I want the app to track all of my characters, plots, and threads. I do not want the immersion of the game stifled by having to think too much about what is happening to the story.
- All characters and threads are stored in the list tab. 
- Anytime a character/group/thread is referenced by the oracle, the app will automatically insert this value into a random event for the user.

As a GM/player, I want any unnecessary dice rolls to be handled by the app. I should only be focused on my own character’s dice rolls.
- The scene, question, and event button and the app automatically selecting characters or threads eliminate any extra dice rolls by the player or GM. 

As a Gm, I want my players to feel as if the story is unfolding naturally and not something I have pre-ordained. This is to give them the feeling that they are truly interacting with plot twists rather than feeling like I am pushing them down one linear path.
- The player asks a question. The GM answers it by using the question button. It is a random answer based only on the odds. 
- The GM says something unexpected occurs. The app automatically generates a focus for the random event, the event button will provide a cue as to what has happened. It is random and not likely to be the result of a predetermined storyline. 

As a GM/player, I want a clean elegant app that is not cluttered with text. Anything to take me out of the immersive story is bad.
- Any text that is not relevant to the function of the app is in the how-to modal window. 

# Responsive Testing 

The app is fully responsive. I wanted to experiment more with vh and vw measurements in this app. The desktop and tablet view are both the same. The only problem I can see is if you tile your phone sideways and use the lists tab, any input will make the lists have a scroll bar straight away.  

Media queries mainly deal with making the text smaller and making the viewport height larger for mobile. 


The app was tested using chrome dev tools and also on responsive test tool to make sure there were no responsiveness issues across different devices. 

### How to use section 
This is fully responsive - the only difference is that the iframes will change size at 870 px to 80% of the modal window. 

The width and height of the modal will also change to between 85-90% on mobile devices to give the text more breathing room. The iframes will dissapear completely and be replaced with links to the video.

### Oracle tab

The buttons and chaos number will get smaller as the screen width is lowered, but overall there is no drastic change except for the emulator window becoming longer for mobile view. The button and font size for the button will get smaller in relation to screen width also.

### Journal Tab

The journal tab contents start at 3 divs per row but will change to block elements with 1 per row at smaller screen width. Button size and font size will also get smaller.

### Lists Tab
The lists tab content, characters, and threads start as flex items taking roughly 70% and 30% respectively of the emulator window but will change to being block elements stacked at smaller screen width.


## Video of Responsiveness Testing On google chrome

https://www.youtube.com/watch?v=JIy4kP-j44E


# Browser Compatibility 

The app was tested on the following browsers:

- [Google Chrome](https://www.google.com/chrome/?brand=FHFK&gclid=CjwKCAjw092IBhAwEiwAxR1lRnrDJkW2rc2m-_DsqG2ISAAChH0tbKgopfm-3BMuide3ikPssZgvWhoCsVUQAvD_BwE&gclsrc=aw.ds)

- [Firefox](https://www.mozilla.org/en-US/firefox/) 

- [Opera](www.opera.com) 

- [Edge](https://www.microsoft.com/en-us/edge) 

- [Safari](https://www.apple.com/uk/safari/)

<img src="assets/images/browser-test.png">

As shown above - edge seemed to be zoomed in - I would guess 125% zoom.


# Bugs 

When the blur animation is finished, depending on the browser it can be highlighted and displayed again that way. 

<img src="assets/images/bug-highlight.png">


The scroll bar sticks out slightly due to the border-radius on the modal window. 

<img src="assets/images/bug-scroll.png">

The close and back to top button in the how to section window sometimes obscures text a little. 

<img src="assets/images/bug-close.png">

### How to use section scrollbar
In Google Chrome, Safari, opera, and edge there is little to no difference in how it is rendered. It is a thin black line. In firefox, it is rendered as a grey line, slightly fatter with less opacity. 

Chrome 

<img src="assets/images/chrome-how-scroll.png">

Firefox 

<img src="assets/images/fire-how-scroll.png">

### Journal Tab 

Chrome Render the scrollbar outside the emulator window with no black background. 

<img src="assets/images/chrome-journal-scroll.png">

Firefox does not render the scrollbar or it is hidden by the emulator black background. Although you can still scroll. 

<img src="assets/images/fire-journal-scroll.png">

Edge and Safari have no background and the scroll bar is half on the emulator window and half outside. 

<img src="assets/images/edge-journal-scroll.png">

Opera renders outside the emulator window with a black background. 

<img src="assets/images/opera-journal-scroll.png">


### Lists tab 

Chrome and safari render with no background outside the emulator window. 

<img src="assets/images/chrome-journal-scroll.png">

Firefox again does not render due to the black background but is fully functional. 

<img src="assets/images/fire-journal-scroll.png">

edge and safari 

Edge and Safari have no background and the scroll bar is half on the emulator window and half outside. 

<img src="assets/images/edge-journal-scroll.png">
