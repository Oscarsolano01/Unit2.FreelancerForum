const priceSpan = document.querySelector("#avg-price");
const freelancerList = document.querySelector("#freelancers");

const freelancers = [
  { name: "dr.slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "dr.Possibility", price: 43, occupation: "teacher" },
];

const names = ["Waldo", "Tony", "Hubert"];
const occupations = ["ML Engineer", "Lawyer", "Electrician"];
const prices = [100, 200, 300];
const limit = 10;

const addFreeLancerIntervalid = setInterval(addFreelancer, 2000);

render();

function render() {
  const listings = freelancers.map((person) => {
    const newListing = document.createElement("li");
    newListing.innerText = `Name: ${person.name} Occupation: ${person.occupation} Price:${person.price}`;
    return newListing;
  });
  console.log(...listings);
  freelancerList.replaceChildren(...listings);
}

function addFreelancer() {
  const newFreelancer = {
    name: names[Math.floor(Math.random() * names.length)],
    occupation: occupations[Math.floor(Math.random() * occupations.length)],
    price: prices[Math.floor(Math.random() * prices.length)],
  };
  freelancers.push(newFreelancer);
  console.log(freelancers);
  const averageRate =
    freelancers.reduce(
      (total, currentItem) => (total += currentItem.price),
      0
    ) / freelancers.length;
  priceSpan.innerText = averageRate.toFixed(2);
  render();
}
