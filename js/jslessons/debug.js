/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const people = [
  { name: "john", cool: true, country: "canada" },
  { name: "kookie", cool: true, country: "korea" },
  { name: "sowmi", cool: false, country: "India" }
]
people.forEach((person, index) => {
  console.table(index, person.name, person.cool, person.country)
})
// ---------
// 'console.count' - counts how many times say, a function is run
function certify (name) {
  console.count(`certifying doctor degree for ${name}`)
  return `dr.${name}`
}
