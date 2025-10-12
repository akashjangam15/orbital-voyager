export interface Planet {
  id: string;
  name: string;
  diameter: string;
  mass: string;
  distanceFromSun: string;
  orbitalPeriod: string;
  rotationPeriod: string;
  moons: number;
  temperature: string;
  atmosphere: string;
  description: string;
  color: string;
  orbitRadius: number;
  orbitSpeed: number;
  size: number;
}

export const planets: Planet[] = [
  {
    id: "mercury",
    name: "Mercury",
    diameter: "4,879 km",
    mass: "3.285 × 10²³ kg",
    distanceFromSun: "57.9 million km",
    orbitalPeriod: "88 days",
    rotationPeriod: "59 days",
    moons: 0,
    temperature: "-173°C to 427°C",
    atmosphere: "Minimal (traces of oxygen, sodium, hydrogen)",
    description: "The smallest planet in our solar system and closest to the Sun. Mercury is only slightly larger than Earth's Moon with a heavily cratered surface similar to the Moon's.",
    color: "#8C7853",
    orbitRadius: 4,
    orbitSpeed: 4.7,
    size: 0.4
  },
  {
    id: "venus",
    name: "Venus",
    diameter: "12,104 km",
    mass: "4.867 × 10²⁴ kg",
    distanceFromSun: "108.2 million km",
    orbitalPeriod: "225 days",
    rotationPeriod: "243 days",
    moons: 0,
    temperature: "462°C",
    atmosphere: "Carbon dioxide (96.5%), nitrogen (3.5%)",
    description: "Often called Earth's twin due to similar size, Venus has a thick toxic atmosphere that traps heat in a runaway greenhouse effect. It's the hottest planet in our solar system.",
    color: "#FFC649",
    orbitRadius: 7,
    orbitSpeed: 3.5,
    size: 0.95
  },
  {
    id: "earth",
    name: "Earth",
    diameter: "12,742 km",
    mass: "5.972 × 10²⁴ kg",
    distanceFromSun: "149.6 million km",
    orbitalPeriod: "365.25 days",
    rotationPeriod: "24 hours",
    moons: 1,
    temperature: "-88°C to 58°C",
    atmosphere: "Nitrogen (78%), oxygen (21%)",
    description: "Our home planet is the only known world to harbor life. Earth's atmosphere protects us from meteoroids and radiation, and is just right for us to breathe.",
    color: "#4A90E2",
    orbitRadius: 10,
    orbitSpeed: 3.0,
    size: 1.0
  },
  {
    id: "mars",
    name: "Mars",
    diameter: "6,779 km",
    mass: "6.39 × 10²³ kg",
    distanceFromSun: "227.9 million km",
    orbitalPeriod: "687 days",
    rotationPeriod: "24.6 hours",
    moons: 2,
    temperature: "-153°C to 20°C",
    atmosphere: "Carbon dioxide (95%), nitrogen (3%)",
    description: "The Red Planet is a cold desert world with polar ice caps. Mars has seasons, weather, volcanoes, canyons, and is a prime candidate for finding signs of past life.",
    color: "#E27B58",
    orbitRadius: 15,
    orbitSpeed: 2.4,
    size: 0.53
  },
  {
    id: "jupiter",
    name: "Jupiter",
    diameter: "139,820 km",
    mass: "1.898 × 10²⁷ kg",
    distanceFromSun: "778.5 million km",
    orbitalPeriod: "12 years",
    rotationPeriod: "10 hours",
    moons: 95,
    temperature: "-148°C",
    atmosphere: "Hydrogen (90%), helium (10%)",
    description: "Jupiter is the largest planet in our solar system. Its Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.",
    color: "#C88B3A",
    orbitRadius: 22,
    orbitSpeed: 1.3,
    size: 2.5
  },
  {
    id: "saturn",
    name: "Saturn",
    diameter: "116,460 km",
    mass: "5.683 × 10²⁶ kg",
    distanceFromSun: "1.4 billion km",
    orbitalPeriod: "29 years",
    rotationPeriod: "10.7 hours",
    moons: 146,
    temperature: "-178°C",
    atmosphere: "Hydrogen (96%), helium (3%)",
    description: "Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings, but none are as spectacular or as complex as Saturn's.",
    color: "#FAD5A5",
    orbitRadius: 30,
    orbitSpeed: 0.97,
    size: 2.1
  },
  {
    id: "uranus",
    name: "Uranus",
    diameter: "50,724 km",
    mass: "8.681 × 10²⁵ kg",
    distanceFromSun: "2.9 billion km",
    orbitalPeriod: "84 years",
    rotationPeriod: "17.2 hours",
    moons: 27,
    temperature: "-224°C",
    atmosphere: "Hydrogen (83%), helium (15%), methane (2%)",
    description: "The ice giant Uranus rotates at nearly 90 degrees from the plane of its orbit, making it appear to spin on its side. It was the first planet discovered with a telescope.",
    color: "#4FD0E7",
    orbitRadius: 38,
    orbitSpeed: 0.68,
    size: 1.6
  },
  {
    id: "neptune",
    name: "Neptune",
    diameter: "49,244 km",
    mass: "1.024 × 10²⁶ kg",
    distanceFromSun: "4.5 billion km",
    orbitalPeriod: "165 years",
    rotationPeriod: "16 hours",
    moons: 14,
    temperature: "-214°C",
    atmosphere: "Hydrogen (80%), helium (19%), methane (1%)",
    description: "Neptune is dark, cold, and very windy. It's the last of the hydrogen and helium gas giants. More than 30 times as far from the Sun as Earth, Neptune is invisible to the naked eye.",
    color: "#4169E1",
    orbitRadius: 45,
    orbitSpeed: 0.54,
    size: 1.5
  }
];
