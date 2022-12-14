Destination Unknown
=

Introduction
=
Destination Unknown is a simple quiz game to test your geographical skills. It shows a photo of a country,
and the user has to guess which country it is by selecting one of the two options.


Users of this website will be able to play the game and test their knowledge. 


![Photo of the website on multiple different screens](assets/images/amiresponsive.png)

The website can be viewed here: [Desination Unknown](https://rinalds98.github.io/destination-unknown/ "Destination Unknown").

# Table of contents
- [User Experience](#userexperience)
- [Features](#features)
- [Testing](#testing)
- [Deployment](#deployment)
- [Technologies Used](#technologies)
- [Credits](#credits)

<div id='userexperience'/>

User Experience
=
## **User Stories**
- ## **As a website owner I want that:**

    1. The website provides clear and concise instructions on how the game is played.
    2. The website allows the user to input their username and be able to see their score at the end.
------

- ## **As a website user I want:**
    1. To easily understand what the quiz is about.
    2. To test their geographical skills.
    3. The answer buttons to work.
    4. To be able to track my score.
 ------

- ## **As a returning website user I want:**
    1. To be able to retry to get a higher score.


# 1. Strategy

- The main purpose of this quiz is to make it a fun and challenging experience.
- With this quiz people with an interest in geography can test their skills to find out if they know what country each location is located in.

# 2. Scope
- After multiple design choices; a simple 2-button choice design was chosen with a big image to make it aesthetically pleasing.
- It has been designed with mobile devices in mind so most smartphones and tablets can access and try the quiz.

# 3. Structure
- A start screen that explains what the quiz is about, so the user can prepare to answer the questions.
- For desktop and mobile view the quiz has the same design. To keep it simple for cross-platform use.
- The logo has been centered for both desktop and mobile. While also the logo has been made into a favicon.
- A game over screen has been implemented to tell the user the quiz has ended. It also shows the score.

# 4. Skeleton
## **Wireframes**
- The initial designs were made as Wireframes using 'Balsamiq'.

![Balsamiq Wireframes](assets/images/wireframe.png)

# 5. Surface
 - ## **Color**
    - The color theme is based on a simple blue and white design. 
    - Polygons to be added for aesthetic reasons and to add depth to the quiz (Website).
    - All of the buttons have the same shape and color. They change color once hovered over.
    - the color blue was chosen as the main color to display calmness with the idea that the user would feel relaxed as they complete the quiz.
    - The colors green and red were chosen for when the user selects a correct or wrong answer.

 - ## **Font**
    - The font 'Lato' was used throughout the website and was imported from Google Fonts.
 - ## **Favicon**
    - The favicon I opted to use was the initials of the website name which consequently is also the logo. I chose the color blue to keep the design the same.

<div id='features'/>

Features
=
The quiz 'Destination Unknown' is a simple quiz that tests the knowledge of the user. Even though it looks very simple on the outside there are a lot of things working in the background so the user can have a pleasant experience while playing.

- ## **Desktop and Mobile viewing**
    - It was important to have the website work across both mobile and desktop. This required the use of media queries to accommodate different screen sizes.
    - Desktop

    ![Desktop Quiz](assets/images/desktop.png)
 
    - Mobile
 
    ![Mobile Quiz](assets/images/mobile.png)

- ## **Start and Game Over Screen**
    - When first starting the quiz. The user will be first greeted with a start screen that explains what the quiz is about and asks to input their username. Once they are ready they can click the 'start quiz' button and the quiz begins.
    
    ![Start Screen](assets/images/startscreen.png)

    - After the quiz is complete the game over screen will show. It will thank the user for playing and it will show the correct and incorrect answers. It will also prompt the user if they would like to try again to see if they can get a better score.
    
    ![game Over Screen](assets/images/gameover.png)

- ## **Main Game Area**
    - The user is presented with an image of a random country and 2 answers to select from. When the user selects the correct country the white background will flash green but if they select the wrong country it will flash red. 
    
    ![Main Game Area](assets/images/desktop.png)

<div id='testing'/>

Testing
=

## **Solved Bugs**
- On mobile devices when the user clicked an answer the button would stay white (In hover mode) this was fixed by using media queries and the 'active' pseudo-class to solve the issue.

## **Unfixed Bugs**
- If the user clicks the answer buttons very quickly. It can generate extra correct answers. When you click retry at the end of the game, it doesn't work as intended anymore.

## **Validator Testing**

- **Testing**
    - I tested my website on multiple browsers including Chrome, Firefox, and Safari (IOS).
    - I also tested it on multiple devices including Laptop, Samsung S20 Ultra (Android 12), iPhone 13 Pro Max (IOS 16)

- **HTML**
    - No errors were returned when passing through the official W3C Validator.
    ![HTML Validator Check](assets/images/htmlvalidator.png)

- **CSS**
    - No Errors were found when passing through the official (Jigsaw) validator.
    ![CSS Validator Check](assets/images/cssvalidator.png)
 
 **Javascript**
    - No Errors were found when passing through the official (JShint) validator.
    - 1 Warning came up - "Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (saveUsername, startGame, checkAnswer)"
    ![Javascript Validator Check](assets/images/jshint.png)

- **Accessibility (Lighthouse)**
    - I confirmed that the colors and fonts chosen are easy to read and accessible by running it through 'Lighthouse' in Google Devtools.
    - I also confirmed that my website is fully accessible to people who are visually impaired or use screen readers.
    ![Lighthouse Check](assets/images/lighthousereport.png)


## **Manual Testing**
The Following was tested manually and passed:

- **Username Input**
    - By adding a username it gets stored in local storage until the end of the quiz where the username is displayed.
- **Buttons**
    - Start Quiz button works as intended. Changes from the start screen to the game screen.
    - The answer buttons work as designed giving the user feedback if they got the correct or incorrect answer.
    - In the game over screen, the retry button works as intended resetting back to the first quiz question.
- **javascript**
    - When the user gets to the final quiz question, after answering, it automatically brings the user to the game over screen.
    - The score is being tracked accurately.

<div id='deployment'/>

Deployment
=

**The site was deployed to GitHub pages. The steps to deploy are as follows:**
- In the GitHub repository, navigate to the Settings tab and on the left side menu click 'Pages'
- Select 'Deploy From Branch' and from the 'branch' option select 'Main' and click 'Save'
- Once it has been saved. A link will be provided to access the completed Website.

The live link can be found here [Desination Unknown](https://rinalds98.github.io/destination-unknown/ "Destination Unknown").

<div id='technologies'/>

Technologies Used
=

- ## Languages
    - HTML5
    - CSS3
    - Javascript

- ## Misc. Software
    - [Google Fonts](https://fonts.google.com/ "googlefonts") - 'Lato' was used throughout the website.
    - [Favicon](https://Favicon.io/ "Favicon") - Favicon used to convert 'PNG' into a favicon 'ICO' format.
    - [Balsamiq](https://Balsamiq.com/ "Balsamiq") - Wireframes (sketches) were created using Balsamiq.

<div id='credits'/>

Credits
=

## **Content**
- To set a timer, I went to stack overflow to find out how to get a timer to work so it waits a few seconds before loading the next image.
    - https://stackoverflow.com/questions/5600351/javascript-change-css-color-for-5-seconds

- To add a box shadow I went to W3schools to find information on how to do it.
    - https://www.w3schools.com/css/css3_shadows_box.asp
    ![W3 Schools Box Shadow](assets/images/boxshadow.png)

- To add a Start and Game Over screen I used 'David Reids' youtube video for guidance and inspiration on how to do it.
    - https://www.youtube.com/watch?v=8_zUEh7Vqhs&ab_channel=DavidReid

- To modify datasets I used 'webdevsimplified' blog website to gain insight on how to do it.
    - https://blog.webdevsimplified.com/2020-10/javascript-data-attributes/

- To Modify the color of the placeholder text for the username, I went to W3Schools to make it compatible with multiple browsers.
    - https://www.w3schools.com/howto/howto_css_placeholder.asp
    ![W3 Schools Placeholder Text](assets/images/placeholderText.png)

- [Favicon](https://Favicon.io/ "Favicon") - Favicon used to convert 'PNG' into a favicon 'ICO' format.

- [amiresponsive](https://ui.dev/amiresponsive "amiresponsive") - amiresponsive was used to generate a responsive website image used in the README.md file. 

## **Media**

- All images were taken from [unsplash.com](https://unsplash.com/ "unsplash.com").

    - https://unsplash.com/photos/Oja2ty_9ZLM

    - https://unsplash.com/photos/N4DbvTUDikw

    - https://unsplash.com/photos/_KhePTaoa10

    - https://unsplash.com/photos/AaExF6NxvQo

    - https://unsplash.com/photos/65c5xq7Qgdk