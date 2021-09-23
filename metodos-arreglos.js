const arr = [5, 1, 2, 3, 4];

const r = arr.filter((el, i) => {
  console.log(i);
  return el > 2;
});

console.log(r);

const mapped = arr.map((el) => `<h1>${el}</h1>`);
console.log(mapped);

const users = [
  { id: 1, name: "Chanchito feliz" },
  { id: 2, name: "Chanchito triste" },
  { id: 3, name: "Chanchito emocionado" },
  { id: 4, name: "Guillermo" },
];

const mappedUser = users.map((user) => `<h1>${user.name}</h1>`);

console.log(mappedUser);
