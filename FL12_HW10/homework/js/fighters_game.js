function Fighter(name, damage, strength, agility, hp) {
  let maxAmount = 100;
  let winCount = 0;
  let loseCount = 0;
  return {
    getName() {
      return name;
    },
    getDamage() {
      return damage;
    },
    getStrength() {
      return strength;
    },
    getAgility() {
      return agility;
    },
    getHealth() {
      return hp;
    },
    heal(healAmount) {
      hp = hp + healAmount > maxAmount ? maxAmount : hp + healAmount;
    },
    dealDamage(damageAmount) {
      hp = hp < damageAmount ? 0 : hp - damageAmount;
    },
    logCombatHistory() {
      console.log(`Name: ${name}, Wins: ${winCount}, Lossses: ${loseCount}`);
    },
    addWin() {
      winCount += 1;
    },
    addLoss() {
      loseCount += 1;
    },
    attack(fighter) {
      let damageChance = Math.floor(Math.random() * maxAmount);
      let presentDamageChance =
        maxAmount - (fighter.getStrength() + fighter.getAgility());
      if (presentDamageChance > damageChance) {
        fighter.dealDamage(damage);
        console.log(`${name} makes ${damage} damage to ${fighter.getName()}`);
      } else {
        console.log(`${name} attack is missed`);
      }
    }
  };
}

function battle(fighter1, fighter2) {
  if (fighter1.getHealth() <= 0) {
    console.log(`${fighter1.getName()} is dead and can't fight`);
  } else if (fighter2.getHealth() <= 0) {
    console.log(`${fighter2.getName()} is dead and can't fight`);
  }
  while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
    fighter1.attack(fighter2);
    if (fighter2.getHealth() <= 0) {
      console.log(`${fighter1.getName()} has won!`);
      fighter1.addWin();
      fighter2.addLoss();
    } else {
      fighter2.attack(fighter1);
      if (fighter1.getHealth() <= 0) {
        console.log(`${fighter2.getName()} has won!`);
        fighter2.addWin();
        fighter1.addLoss();
      }
    }
  }
}
