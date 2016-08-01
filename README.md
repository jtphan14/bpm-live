#BeatsPerMash Live

##Description:
Beats Per Mash (aka BPM) was built using Rails 5, Javascript, and Jquery to solve the problem of geographic location limiting the ability to create music live together. Sounds are generated with the keypress of numbers 1 to 9 on the keyboard. Create a new room to have a private session with anyone and begin creating; it is designed for up to 10 users to jump on and 'mash' live with friends.


## Technologies Used
* Back End: Rails5 (with implementation of Action Cable and Websockets) , Active Record, PostgreSql
* Front End: Javascript, jQuery
* Plugins & Gems: js.cookie, jQuery-ui, devise, jquery_ujs, redis

##User Stories:
* Main Page
  * Given I open the website
  * When I am on the homepage
  * Then I should be able to begin playing

* New User

  * Given I am a new user
  * When I am on the homepage
  * Then I should be able to sign up for an account

* Registered User

  * Given I am a registered user
  * When I am on the homepage
  * Then I should be able to save my sounds

* User profile

  * Given I am a logged in user
  * When I am on my profile
  * I should be able to play my saved sounds

* Room Page

  * Given I am in a Room
  * When I am in a Room
  * I should be able to play music with others in that room

##Team Members

  * Brad Harris
  * Jacqueline Phan
  * Michael Dumalag
  * Richie Yi
  * Thomas Farr
