For assignment 2, I decided to make a page that displays the current statics of cases of covid-19 in different countries.
I did this by allowing the users to choose a country of their choice. They can do this by entering a country name into the searchbar, then clicking the submit button. Visitors can also find the cases in their current country by pressing the 'use current location' button, or find total global statistics, by presing the 'get global data' button.
for the table in my home page, I referenced the code from https://www.youtube.com/watch?v=XmdOZ5NSqb8 and https://github.com/divanov11/json-html-table, and used their stylesheet to design the table. 
for my submit button, I referenced this video: https://www.tutorialrepublic.com/faq/how-to-get-the-value-of-text-input-field-using-javascript.php to learn how to implement it. I also referenceed this video: https://www.youtube.com/watch?v=4UoUqnjUC2c to help he figure out how to manipulate the api's url to give me the data i wanted. I referenced https://stackoverflow.com/questions/2156231/how-do-you-detect-a-website-visitors-country-specifically-us-or-not to get the code to allow mw to find the current country my website's visitors are in

On my second page, my settings page, I have a few different colour options you can choose from. When you tap on any one of these colours, the selected colour will be set as your background colour. I achieved this through using cookies to save the colour chosen. to do this, i referenced code from https://codepen.io/Venom/pen/adLpOR

testing:
first when i tried to retreive data from each api, as the api stores all the country's previous day's data, as well as the latest data, I tried to get the data by finding the length of the data, but at first i forgot to decrease the length by 1, so it just registered as undefined.

references:
table in home page: https://www.youtube.com/watch?v=XmdOZ5NSqb8 , https://github.com/divanov11/json-html-table
submit button: https://www.tutorialrepublic.com/faq/how-to-get-the-value-of-text-input-field-using-javascript.php
manipulate api: https://www.youtube.com/watch?v=4UoUqnjUC2c
current country: https://stackoverflow.com/questions/2156231/how-do-you-detect-a-website-visitors-country-specifically-us-or-not
background colour: https://codepen.io/Venom/pen/adLpOR