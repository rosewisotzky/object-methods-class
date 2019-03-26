console.log("splish splash swimming in a sea of confidence and education")


const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

const doctorsBill = {
    officeName: "Medicine Palace",
    streetAddress: "1234 Paul Riggggal Blvd",
    doctorName: "Dr. Shaboygan",
    patientName: "Rhees",
    visitDate: "10/31/1990",
    amountBilled: 420.00,
    dueDate: "10/31/6666"
}


console.log("date visited", doctorsBill[dateVisited])

console.log("amount owed", doctorsBill[owed])

console.log("patient", doctorsBill[patient])

console.log(Object.values(doctorsBill))

for(const value of Object.values(doctorsBill)) {
    console.log(value)
}

// Lightning Exercise 1: Output all of the key names from your doctor's office bill to the console in Chrome.

// Lightning Exercise 2: Output all of the key names from your doctor's office bill to the DOM inside a parent <section> element. Wrap each one in a <span> element.
const firstKey = doctorsBill[0]
for(const key of Object.keys(doctorsBill)) {
    console.log(key)
}

// createElement
const doctorKeySection = document.createElement("section")
const doctorApp = document.querySelector("#doctor-app")
for(const key of Object.keys(doctorsBill)) {
    const doctorKeySpan = document.createElement("div")
    doctorKeySpan.textContent = key
    doctorKeySection.appendChild(doctorKeySpan)
    console.log(doctorKeySection)
}

// doctorApp.appendChild(doctorKeySection)

// innerHTML

let doctorKeysHtml = "<h1>Doctor Bill Object Keys</h1>"
let keysSpanHtml = ""
doctorApp.innerHTML = doctorKeysHtml
for(const key of Object.keys(doctorsBill)) {
    keysSpanHtml+= `<span>${key}</span>`
}
// debugger
doctorKeysHtml += `<section>${keysSpanHtml}</section>`
doctorApp.innerHTML = doctorKeysHtml