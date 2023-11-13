let quotes = [
    `"If you're good at anything, never do it for free"__ Unknown`,

    `"Success is not final; failure is not fatal: It is the courage to continue that counts." — Winston S. Churchill`,

    `"It is better to fail in originality than to succeed in imitation." — Herman Melville`,

    `"The road to success and the road to failure are almost exactly the same." — Colin R. Davis`,

    `“Success usually comes to those who are too busy looking for it.” — Henry David Thoreau`,

    `“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.” —Dale Carnegie`,

    `“Bet on me? Bet I will.” — Lizzo`,

    `“There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.” —Mister Rogers`,

    `“Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.” —John Wooden`,

    `“I never dreamed about success. I worked for it.” —Estée Lauder`,

    `“Success is getting what you want, happiness is wanting what you get.” ―W. P. Kinsella`,

    `“Before anything else, preparation is the key to success.” — Alexander Graham Bell`,

    `“Stay afraid, but do it anyway. What's important is the action. You don’t have to wait to be confident. Just do it and eventually the confidence will follow.” — Carrie Fisher`,

    `“Make each day your masterpiece.” — John Wooden`,

    `“Your talent determines what you can do. Your motivation determines how much you’re willing to do. Your attitude determines how well you do it.” — Lou Holtz`,

    `“​​We will fail when we fail to try.” — Rosa Parks`,

    `“Don’t count the days, make the days count.” — Muhammad Ali `,

    `“Without ambition one starts nothing. Without work one finishes nothing. The prize will not be sent to you. You have to win it.” — Ralph Waldo Emerson`,

    `“I love to see a young girl go out and grab the world by the lapels. Life’s a bitch. You’ve got to go out and kick ass.” — Maya Angelou`,

    `“You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.” — George Lorimer`,

    `“Boss up and change your life / You can have it all, no sacrifice” — Lizzo`,

    `“The plan is to fan this spark into a flame.” — Lin-Manuel Miranda`,

    `“Real change, enduring change, happens one step at a time.” — Ruth Bader Ginsburg`,

    `“Light tomorrow with today.” — Elizabeth Barrett Browning`,

    `“Drench yourself in words unspoken / Live your life with arms wide open / Today is where your book begins / The rest is still unwritten” — Natasha Bedingfield`,

    `“And now that you don’t have to be perfect, you can be good.” — John Steinbeck`
]

const quoteBlock = document.querySelector('.quote-block')

var users = {
    one: {
            name: 'batman',
            age: 25
       },
    two: {
           name: 'spiderman',
           age: 27
       },
    three: {
            name: 'superman',
            age: 26
         }
    };
    
    //Build an array of users from the users object
    var userArray = [],
        buildUserArray = (function(){
            for (key in users) {
                if (users.hasOwnProperty(key)){
                    userArray.push(users[key]);
                }
            }
        })();
    
    var displayNames = {
        max : quotes.length, 
        current : 0,
        timeout : null,
        go : function() {
            console.log(quotes[this.current]);//the whole user object
            quoteBlock.textContent = quotes[this.current]

            this.current = (this.current+1) % this.max;//increment current position
            this.timeout = setTimeout(function(){displayNames.go();}, 10000);
        },
        stop : function(){
            clearTimeout(this.timeout);
        }
    }
    //to start
    displayNames.go();
    //set to stop after 5 seconds:
    setTimeout(function(){displayNames.stop();}, 100000000);