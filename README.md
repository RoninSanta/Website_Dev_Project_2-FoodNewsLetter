# Website Development Project 2-FoodNewsLetter
A food news letter website I created that promotes healthy eating, with simple recipes that are easy to prepare and high in nutrients. The website is dynamic website and will change its fonts and layout to accommodate small screen resolution devices such as smartphones as well as monitors.
- The website contains 5 pages, the `Home` Page, `Menu` Page, `Nutrition` Page, `About ` Page and lastly a `Report` where I stated all my development process and the purpose of my project.
- This is my final Website development project, I showcased all the techniques I have learned and applied it to this website.

### [Home Page]
- **Image Carousell**: A component that can rotate different images on the home page
- **Containers**: A method that allows me to group texts in boxes and display them into a row
- **Minimalistic design**: All interface and texts are all grouped together for easy navigation and retireve info
- **Navigation Header**: The headers will redirect the user to vaious pages in the website
- `SUBSCRIBE ` Button that will redirect users to the SIGN-UP page


### [Menu Page]
- **Containers**: A method that allows me to group texts in boxes and display them into a row
- **Minimalistic Box**: All images and texts are all grouped together as boxes
- **Auto re-align**: The boxes are automatically realligned to fit any screen size and resolution.This is done using the CSS feature
- **Zoom in**: The 3 headers **Breakfast**, **Lunch** and **Dinner** are able to zoom in and fade in when the cursor is hovered on top of them to give them a aesthetic look
- **Different Fonts**: Different fonts are selected for different uses


### [Nutrition Page]
-A page that provides helpful health tips and informative messages to the user
-A scrollable header with cute background wallpaper
-The Texts are brought up when the user scrolls


### [About Page]
- A page dedicated in telling our story, spread the message in heathy eating and its benefits
- Encourage users to sign up to the newsletter,which will redirect users to the `SUBSCRIBE` page


### [SUBSCRIBE  Page]
- A Page that can allow users to sign up to our newsletter
- The user have to fill in a VALID name and email address and will recevive a confirmation pop-up message
- The email is check with regular expression to match if the email is a valid address.
     pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
    required
- The Name Fill Box is also check to ensure that no symbols are being added into the name space
