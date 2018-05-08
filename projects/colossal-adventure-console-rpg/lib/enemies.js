/* === DEVELOPMENT MODE (START) ============ */

var devMode = false;

/* === DEVELOPMENT MODE (END) ============ */

/**
 * Holds the enemies.
 */
const enemies = [
    {
        name: "Samantha",
        description: "She's saucy. She knows where to hit you where it hurts. She also carries a knife and knows how to use it.",
        danger: devMode ? 0 : 4,
        points: 15,
        isAlive: true
    },
    {
        name: "Jennifer",
        description: "Shes is fierce... in a bad way. Don't turn your back on this one.",
        danger: devMode ? 0 : 5,
        points: 15,
        isAlive: true
    },
    {
        name: "Vanessa",
        description: "She just can't be trusted. She breaks hearts emotionally and literally.",
        danger: devMode ? 0 : 7,
        points: 25,
        isAlive: true
    },
    {
        name: "Alley",
        description: "She won't just stab you; she'll twist the knife.",
        danger: devMode ? 0 : 3,
        points: 10,
        isAlive: true
    },
    {
        name: "Rachael",
        description: "She just sucks. She's not dangerous, but killing her will bank you high points.",
        danger: devMode ? 0 : 1,
        points: 35,
        isAlive: true
    }
];

module.exports = enemies;
