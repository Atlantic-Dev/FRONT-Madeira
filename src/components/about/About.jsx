import React from 'react';
import "./About.css";

const About = () => {
  return (
    <div className="about">
    <div className="aboutDivGen">
        <h1 className="aboutTitle">What is Madeira?</h1>
          <div className='divAbout'>
        <div className="aboutText"> "Madeira, the battle for the throne" is a PC turn based card game, where two players challenge each other to a duel. The player’s goal is to remove all of its opponent HEALTH POINTS (HP) first. Each player counts with a deck of cards that it is previously set up by itself; these cards can have one of the following values: ATTACK POINTS (AP), DEFENSE POINTS (DP), and MANA COST(MC).

      <br></br>

      <br></br>

        <span>- Initially in every match, each player has:</span>
        
        <br></br>

<span>• 4 MANA POINTS</span>

<span>• 30 HP</span>

<span>• 6 cards</span>
<br></br>
<span>- In every turn, each player receives:</span>
<br></br>
<span>• 2 MANA POINTS</span>

<span>• 1 card</span>
<br></br>


On its turn, the player has the chance to invoke up to 2 cards and attack its opponent, expecting to destroy its cards and remove its HP. To destroy a card, the card’s AP that was selected by the player must overcome the opponent’s card’s DP. If the adversary has not invoked any cards in that turn, the amount of AP of the attacking card will be substracted from its HP.


In every finished match, the triumphant wins 15 LEAGUE POINTS (LP) and the defeated loses 15 LP, a tie does not exist.

According to the player’s LP, its status is determined:

<div className="divRank"><p className="copper">COPPER:</p> Less than 900 LP </div>

<div className="divRank"><p className="bronze">BRONZE:</p> 900 to 1199 LP
</div>
<div className="divRank"><p className="silver">SILVER:</p> 1200 to 1449 LP
</div>
<div className="divRank"><p className="gold">GOLD:</p> 1450 to 1699 LP
</div>
<div className="divRank"><p className="platinum">PLATINUM:</p> 1700 to 1999 LP
</div>
<div className="divRank"><p className="diamond">DIAMOND:</p> 2000 LP and up.
</div>

Regardless of these status, the 10 players with the highest LP of the game, automatically change their status to RUBY. In case of the existence of two or more players that happen to have the same LP, its ranking’s position will be determined by the sum of all of its own won matches. That means that, for example, if player A has 1500 LP and 30 won matches, and player B has 1500 LP and 33 won matches, player B will be above player A in the ranking.


Every newly created player starts with 1000 LP and a Bronze status. </div> 
        </div>
    </div>
    </div>
  )
}

export default About
