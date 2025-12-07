const Question = require("../Question");

const questionBank = [
  // Science - Easy
  new Question({
    text: "What is the chemical symbol for water?",
    category: "Science",
    difficulty: "Easy",
    correctAnswer: "H2O",
  }),
  new Question({
    text: "Which planet is known as the Red Planet?",
    category: "Science",
    difficulty: "Easy",
    correctAnswer: "Mars",
  }),
  new Question({
    text: "How many legs does a spider have?",
    category: "Science",
    difficulty: "Easy",
    correctAnswer: "8",
  }),
  new Question({
    text: "What gas do plants absorb from the air?",
    category: "Science",
    difficulty: "Easy",
    correctAnswer: "Carbon dioxide",
  }),
  new Question({
    text: "What do bees make?",
    category: "Science",
    difficulty: "Easy",
    correctAnswer: "Honey",
  }),
  new Question({
    text: "What do humans need to breathe?",
    category: "Science",
    difficulty: "Easy",
    correctAnswer: "Oxygen",
  }),
  new Question({
    text: "How many planets are in our solar system?",
    category: "Science",
    difficulty: "Easy",
    correctAnswer: "8",
  }),
  new Question({
    text: "What is at the center of our solar system?",
    category: "Science",
    difficulty: "Easy",
    correctAnswer: "Sun",
  }),
  new Question({
    text: "What do we call frozen water?",
    category: "Science",
    difficulty: "Easy",
    correctAnswer: "Ice",
  }),
  new Question({
    text: "Which sense organ is used for seeing?",
    category: "Science",
    difficulty: "Easy",
    correctAnswer: "Eye",
  }),

  // Science - Medium
  new Question({
    text: "What part of the cell contains the genetic material (DNA)?",
    category: "Science",
    difficulty: "Medium",
    correctAnswer: "Nucleus",
  }),
  new Question({
    text: "What force keeps objects attracted to the Earth?",
    category: "Science",
    difficulty: "Medium",
    correctAnswer: "Gravity",
  }),
  new Question({
    text: "What gas do humans exhale?",
    category: "Science",
    difficulty: "Medium",
    correctAnswer: "Carbon dioxide",
  }),
  new Question({
    text: "What does the 'H' stand for in H2O?",
    category: "Science",
    difficulty: "Medium",
    correctAnswer: "Hydrogen",
  }),
  new Question({
    text: "What is Earth's only natural satellite called?",
    category: "Science",
    difficulty: "Medium",
    correctAnswer: "Moon",
  }),
  new Question({
    text: "Which organ pumps blood through the body?",
    category: "Science",
    difficulty: "Medium",
    correctAnswer: "Heart",
  }),
  new Question({
    text: "What do we call animals that eat only plants?",
    category: "Science",
    difficulty: "Medium",
    correctAnswer: "Herbivores",
  }),
  new Question({
    text: "What is the boiling point of water in degrees Celsius?",
    category: "Science",
    difficulty: "Medium",
    correctAnswer: "100",
  }),
  new Question({
    text: "What instrument is used to measure temperature?",
    category: "Science",
    difficulty: "Medium",
    correctAnswer: "Thermometer",
  }),
  new Question({
    text: "What part of a plant carries water from roots to leaves?",
    category: "Science",
    difficulty: "Medium",
    correctAnswer: "Stem",
  }),

  // Science - Hard
  new Question({
    text: "What is the powerhouse of the cell?",
    category: "Science",
    difficulty: "Hard",
    correctAnswer: "Mitochondria",
  }),
  new Question({
    text: "Approximately what is the speed of light in vacuum (in km/s)?",
    category: "Science",
    difficulty: "Hard",
    correctAnswer: "300000",
  }),
  new Question({
    text: "What is the chemical formula for table salt?",
    category: "Science",
    difficulty: "Hard",
    correctAnswer: "NaCl",
  }),
  new Question({
    text: "Which gas is most abundant in Earth's atmosphere?",
    category: "Science",
    difficulty: "Hard",
    correctAnswer: "Nitrogen",
  }),
  new Question({
    text: "Who proposed the three laws of motion?",
    category: "Science",
    difficulty: "Hard",
    correctAnswer: "Isaac Newton",
  }),
  new Question({
    text: "What unit is used to measure electrical resistance?",
    category: "Science",
    difficulty: "Hard",
    correctAnswer: "Ohm",
  }),
  new Question({
    text: "What is the study of fungi called?",
    category: "Science",
    difficulty: "Hard",
    correctAnswer: "Mycology",
  }),
  new Question({
    text: "Which vitamin is produced when skin is exposed to sunlight?",
    category: "Science",
    difficulty: "Hard",
    correctAnswer: "Vitamin D",
  }),
  new Question({
    text: "What is the hardest natural substance on Earth?",
    category: "Science",
    difficulty: "Hard",
    correctAnswer: "Diamond",
  }),
  new Question({
    text: "What type of particle has a negative electric charge?",
    category: "Science",
    difficulty: "Hard",
    correctAnswer: "Electron",
  }),

  // History - Easy
  new Question({
    text: "Who was the first President of the United States of America?",
    category: "History",
    difficulty: "Easy",
    correctAnswer: "George Washington",
  }),
  new Question({
    text: "In which country are the Pyramids of Giza located?",
    category: "History",
    difficulty: "Easy",
    correctAnswer: "Egypt",
  }),
  new Question({
    text: "In which country did the Olympic Games originate?",
    category: "History",
    difficulty: "Easy",
    correctAnswer: "Greece",
  }),
  new Question({
    text: "Who was the first man to walk on the Moon?",
    category: "History",
    difficulty: "Easy",
    correctAnswer: "Neil Armstrong",
  }),
  new Question({
    text: "Which city is the capital of France?",
    category: "History",
    difficulty: "Easy",
    correctAnswer: "Paris",
  }),
  new Question({
    text: "Which wall dividing a German city fell in 1989?",
    category: "History",
    difficulty: "Easy",
    correctAnswer: "Berlin Wall",
  }),
  new Question({
    text: "Who was the Indian leader known as the 'Father of the Nation'?",
    category: "History",
    difficulty: "Easy",
    correctAnswer: "Mahatma Gandhi",
  }),
  new Question({
    text: "Which famous ship sank in 1912 after hitting an iceberg?",
    category: "History",
    difficulty: "Easy",
    correctAnswer: "Titanic",
  }),
  new Question({
    text: "Which empire built the Colosseum in Rome?",
    category: "History",
    difficulty: "Easy",
    correctAnswer: "Roman Empire",
  }),
  new Question({
    text: "Which river is most closely associated with ancient Egyptian civilization?",
    category: "History",
    difficulty: "Easy",
    correctAnswer: "Nile",
  }),

  // History - Medium
  new Question({
    text: "In which year did World War II end? (Hint: 19xx)",
    category: "History",
    difficulty: "Medium",
    correctAnswer: "1945",
  }),
  new Question({
    text: "Who was known as the 'Iron Lady'?",
    category: "History",
    difficulty: "Medium",
    correctAnswer: "Margaret Thatcher",
  }),
  new Question({
    text: "Who wrote the play 'Romeo and Juliet'?",
    category: "History",
    difficulty: "Medium",
    correctAnswer: "William Shakespeare",
  }),
  new Question({
    text: "Who was the first Mughal emperor of India?",
    category: "History",
    difficulty: "Medium",
    correctAnswer: "Babur",
  }),
  new Question({
    text: "Which war was fought between the North and South regions of the United States?",
    category: "History",
    difficulty: "Medium",
    correctAnswer: "American Civil War",
  }),
  new Question({
    text: "Who was the first woman Prime Minister of India?",
    category: "History",
    difficulty: "Medium",
    correctAnswer: "Indira Gandhi",
  }),
  new Question({
    text: "In which year did India gain independence?",
    category: "History",
    difficulty: "Medium",
    correctAnswer: "1947",
  }),
  new Question({
    text: "Which revolution began in 1789 and changed France?",
    category: "History",
    difficulty: "Medium",
    correctAnswer: "French Revolution",
  }),
  new Question({
    text: "Which empire was ruled from the city of Constantinople?",
    category: "History",
    difficulty: "Medium",
    correctAnswer: "Byzantine Empire",
  }),
  new Question({
    text: "Which treaty officially ended World War I?",
    category: "History",
    difficulty: "Medium",
    correctAnswer: "Treaty of Versailles",
  }),

  // History - Hard
  new Question({
    text: "Which empire was ruled by Genghis Khan?",
    category: "History",
    difficulty: "Hard",
    correctAnswer: "Mongol Empire",
  }),
  new Question({
    text: "Which ancient civilization built Machu Picchu?",
    category: "History",
    difficulty: "Hard",
    correctAnswer: "Inca",
  }),
  new Question({
    text: "Who was the longest-reigning British monarch before Queen Elizabeth II?",
    category: "History",
    difficulty: "Hard",
    correctAnswer: "Queen Victoria",
  }),
  new Question({
    text: "Which dynasty built most of the Great Wall of China that exists today?",
    category: "History",
    difficulty: "Hard",
    correctAnswer: "Ming Dynasty",
  }),
  new Question({
    text: "Who was the founder of the Maurya Empire in India?",
    category: "History",
    difficulty: "Hard",
    correctAnswer: "Chandragupta Maurya",
  }),
  new Question({
    text: "Which Russian czar was overthrown in the 1917 revolution?",
    category: "History",
    difficulty: "Hard",
    correctAnswer: "Nicholas II",
  }),
  new Question({
    text: "Which ancient city was destroyed by the eruption of Mount Vesuvius?",
    category: "History",
    difficulty: "Hard",
    correctAnswer: "Pompeii",
  }),
  new Question({
    text: "Who was the Carthaginian general who crossed the Alps with elephants?",
    category: "History",
    difficulty: "Hard",
    correctAnswer: "Hannibal",
  }),
  new Question({
    text: "Which battle in 1066 led to Norman rule in England?",
    category: "History",
    difficulty: "Hard",
    correctAnswer: "Battle of Hastings",
  }),
  new Question({
    text: "Which document, signed in 1215, limited the power of the English king?",
    category: "History",
    difficulty: "Hard",
    correctAnswer: "Magna Carta",
  }),

  // Fun Facts - Easy
  new Question({
    text: "Which animal is known as the 'King of the Jungle'?",
    category: "Fun Facts",
    difficulty: "Easy",
    correctAnswer: "Lion",
  }),
  new Question({
    text: "How many days are there in a leap year?",
    category: "Fun Facts",
    difficulty: "Easy",
    correctAnswer: "366",
  }),
  new Question({
    text: "What is the largest planet in our solar system?",
    category: "Fun Facts",
    difficulty: "Easy",
    correctAnswer: "Jupiter",
  }),
  new Question({
    text: "What color are most school buses traditionally painted?",
    category: "Fun Facts",
    difficulty: "Easy",
    correctAnswer: "Yellow",
  }),
  new Question({
    text: "How many continents are there on Earth?",
    category: "Fun Facts",
    difficulty: "Easy",
    correctAnswer: "7",
  }),
  new Question({
    text: "What do cows drink?",
    category: "Fun Facts",
    difficulty: "Easy",
    correctAnswer: "Water",
  }),
  new Question({
    text: "Which animal makes a 'meow' sound?",
    category: "Fun Facts",
    difficulty: "Easy",
    correctAnswer: "Cat",
  }),
  new Question({
    text: "Which shape has three sides?",
    category: "Fun Facts",
    difficulty: "Easy",
    correctAnswer: "Triangle",
  }),
  new Question({
    text: "What do you call a baby dog?",
    category: "Fun Facts",
    difficulty: "Easy",
    correctAnswer: "Puppy",
  }),
  new Question({
    text: "What is 2 + 2?",
    category: "Fun Facts",
    difficulty: "Easy",
    correctAnswer: "4",
  }),

  // Fun Facts - Medium
  new Question({
    text: "Which is the tallest mountain in the world?",
    category: "Fun Facts",
    difficulty: "Medium",
    correctAnswer: "Mount Everest",
  }),
  new Question({
    text: "Which is the largest ocean on Earth?",
    category: "Fun Facts",
    difficulty: "Medium",
    correctAnswer: "Pacific",
  }),
  new Question({
    text: "Which country is famous for the Eiffel Tower?",
    category: "Fun Facts",
    difficulty: "Medium",
    correctAnswer: "France",
  }),
  new Question({
    text: "Which language has the most native speakers in the world?",
    category: "Fun Facts",
    difficulty: "Medium",
    correctAnswer: "Mandarin",
  }),
  new Question({
    text: "On which date is Earth Day celebrated?",
    category: "Fun Facts",
    difficulty: "Medium",
    correctAnswer: "April 22",
  }),
  new Question({
    text: "Which sport is known as 'the gentleman's game'?",
    category: "Fun Facts",
    difficulty: "Medium",
    correctAnswer: "Cricket",
  }),
  new Question({
    text: "Which country is both a continent and a country?",
    category: "Fun Facts",
    difficulty: "Medium",
    correctAnswer: "Australia",
  }),
  new Question({
    text: "Which city is known as the 'Big Apple'?",
    category: "Fun Facts",
    difficulty: "Medium",
    correctAnswer: "New York",
  }),
  new Question({
    text: "How many stripes are on the flag of the United States?",
    category: "Fun Facts",
    difficulty: "Medium",
    correctAnswer: "13",
  }),
  new Question({
    text: "What is the currency of Japan?",
    category: "Fun Facts",
    difficulty: "Medium",
    correctAnswer: "Yen",
  }),

  // Fun Facts - Hard
  new Question({
    text: "Which country has the most time zones in the world?",
    category: "Fun Facts",
    difficulty: "Hard",
    correctAnswer: "France",
  }),
  new Question({
    text: "What is the smallest country in the world by area?",
    category: "Fun Facts",
    difficulty: "Hard",
    correctAnswer: "Vatican City",
  }),
  new Question({
    text: "What is the longest river in the world?",
    category: "Fun Facts",
    difficulty: "Hard",
    correctAnswer: "Nile",
  }),
  new Question({
    text: "Which element has the chemical symbol 'Au'?",
    category: "Fun Facts",
    difficulty: "Hard",
    correctAnswer: "Gold",
  }),
  new Question({
    text: "Which desert is the largest hot desert in the world?",
    category: "Fun Facts",
    difficulty: "Hard",
    correctAnswer: "Sahara",
  }),
  new Question({
    text: "Which scientist developed the theory of general relativity?",
    category: "Fun Facts",
    difficulty: "Hard",
    correctAnswer: "Albert Einstein",
  }),
  new Question({
    text: "Which city hosted the first modern Olympic Games in 1896?",
    category: "Fun Facts",
    difficulty: "Hard",
    correctAnswer: "Athens",
  }),
  new Question({
    text: "Which is the only mammal capable of true flight?",
    category: "Fun Facts",
    difficulty: "Hard",
    correctAnswer: "Bat",
  }),
  new Question({
    text: "What is the capital city of Canada?",
    category: "Fun Facts",
    difficulty: "Hard",
    correctAnswer: "Ottawa",
  }),
  new Question({
    text: "Which metal is liquid at room temperature?",
    category: "Fun Facts",
    difficulty: "Hard",
    correctAnswer: "Mercury",
  }),
];

module.exports = questionBank;
