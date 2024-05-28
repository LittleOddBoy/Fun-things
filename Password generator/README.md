# Password Generator
This is a very small project designed to generate a random string of special chars, numbers and all cases of letters to build a strong password. It was a joyfull journy for me due to so many things that I learned, and of course the story behind the whole idea...

## Story time!
I was at LeetCode, doing some fun stuff and trying to start the problem solving progress on this extraordinary website. While doing a very easy problem (honestly, it was about returning a hello world via JavaScript, yes I know) I've found an interesting solution that talks about "Where should we use arrow function syntax?!" and I decided to check it out. Until that time, I wasn't familier with the topic of **Generative functions** and it was the first time that I've seen this word (the article was talking about the places that we can't use arrow function syntax and one of the cases is Generative functions). It produced a good reason for me to try not to miss this chance. The fantastic chance of finding *fun things*!

After some researches, I've found a very good idea - with the help of Javascript.info documentation - and that was creating a password generator!

## Logic
Everytime you run the program (all the versions, I mean) you'll get a huge amount of chars that are created randomly and arrenged more randomly! For the purpose of generating chars, I decided to use the ASCII table, the only option that I know I have.

## Logic, but deeper
In each version of program there is a generator function that generate the a random binding of random numbers, started at the starter point of the society of chars in ASCII table (i.e: special chars are started at the point of 33 in ASCII table) and ended up at the end point of the society of chars in the table (for special chars, it's 47). There is also a feature (idk but I think the word "feature" isn't good for this, but we'll continue any way!) to define how many digits do you want to have for each group of chars (for instance, you can provide how many special chars do you want by changing that argument in the `generatePasswordCodes` functions or the similar ones). That's all the things `generateRandomRange` function can do. 

After generating the random numbers, we'll see a function called `generatePasswordCodes` that just created to generate the random numbers for each group and return them, this is also another generator function. The next step is to converting the numbers - better call "indexes" - to the ASCII chars and having them in a line. The last step would be randomize the place of each char. To reach this goal, I used to use Fisher-Yates shuffle to randomize and replace the whole string. I should note that in the Python version of the program I just wrote the program with `random.shuffle()` and I don't know is this the same thing as Fisher-Yates of not! By the way, better to continue. 

The last step will be just enjoying! Yes! It's done!

## The end
What do you want? Just happy hacking!
