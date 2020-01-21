let i = 0;

do {
  i++;

  console.log(i);
} while (i < 1000);
console.log("////////////////////////////////////////////////////");
let Person = {
  firstName: "Jane",

  lastName: "Doe",

  birthDate: "Jan 5, 1925",

  gender: "female"
};

for (var oddYear in Person) {
  if (oddYear % 2 !== 0) {
    console.log(Person.birthDate);
  }
}

var arrayOfPersons = [
  {
    firstName: "Jane",

    lastName: "Doe",

    birthDate: "Jan 5, 1925",

    gender: "female"
  },

  {
    firstName: "Laura",

    lastName: "Doe",

    birthDate: "Jan 5, 1927",

    gender: "female"
  },

  {
    firstName: "John",

    lastName: "Doe",

    birthDate: "Jan 5, 1992",

    gender: "male"
  }
];

var persons = arrayOfPersons.map(Doe => {
  console.log(Doe);
});

var males = arrayOfPersons.filter(men => {
  if (men.gender === "male") {
    console.log(men);
  }
});

const young = arrayOfPersons.filter(year => {
  let splitArray = year.birthDate.split(" ");
  if (splitArray[2] < 1990) {
    console.log(year.firstName);
  }
});
