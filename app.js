class Deck {
    constructor() {
        this.deck = [];
        var cards = [];

        document.getElementById('cards').innerHTML = ' ';

        for(var i = 1; i <= 10; i++) {
            cards.push("<img src='cards/h" + i + ".png'>");
        }
        cards.push("<img src='cards/hj.png'>")
        cards.push("<img src='cards/hq.png'>")
        cards.push("<img src='cards/hk.png'>")
        for(var i = 1; i <= 10; i++) {
            cards.push("<img src='cards/c" + i + ".png'>");
        }
        cards.push("<img src='cards/cj.png'>")
        cards.push("<img src='cards/cq.png'>")
        cards.push("<img src='cards/ck.png'>")
        for(var i = 1; i <= 10; i++) {
            cards.push("<img src='cards/d" + i + ".png'>");
        }
        cards.push("<img src='cards/dj.png'>")
        cards.push("<img src='cards/dq.png'>")
        cards.push("<img src='cards/dk.png'>")
        for(var i = 1; i <= 10; i++) {
            cards.push("<img src='cards/s" + i + ".png'>");
        }
        cards.push("<img src='cards/sj.png'>")
        cards.push("<img src='cards/sq.png'>")
        cards.push("<img src='cards/sk.png'>")
        
        this.deck = cards

        for(var i = 0; i < cards.length; i++) {
            document.getElementById('cards').innerHTML += this.deck[i];
        }
    }
    shuffle() {
        var m = this.deck.length, t, i;

        // While there remain elements to shuffle…
        while (m) {
      
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);
      
          // And swap it with the current element.
          t = this.deck[m];
          this.deck[m] = this.deck[i];
          this.deck[i] = t;
        }
        document.getElementById('cards').innerHTML = ' ';
        for(var i = 0; i < this.deck.length; i++) {
            document.getElementById('cards').innerHTML += this.deck[i];
        }
        return this.deck
    }
    deal() {
        var card = Math.floor(Math.random() * (this.deck.length - 1 - 0) + 0)
        this.deck.splice(card, 1)
        document.getElementById('cards').innerHTML = ' ';
        for(var i = 0; i < this.deck.length; i++) {
            document.getElementById('cards').innerHTML += this.deck[i];
        }
        return this.deck[card]
    }
    reset() {
        new Deck()
        return this.deck
    }
}

class Player {
    constructor(name) {
        this.name = name
        this.hand = []
    }
    dealHand(deck) {
        this.hand.push(deck.deal());
        document.getElementById('hand').innerHTML = ' ';
        for(var i = 0; i < this.hand.length; i++) {
            document.getElementById('hand').innerHTML += this.hand[i];
        }
    }
    discardCard(card) {
        this.hand.splice(card, 1)
        document.getElementById('hand').innerHTML = ' ';
        for(var i = 0; i < this.hand.length; i++) {
            document.getElementById('hand').innerHTML += this.hand[i];
        }
    }
}
