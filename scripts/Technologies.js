import { getTechnologies, setTechnologies } from "./database.js"
// const technologies = await getTechnologies();


//^ INSTRUCTION: Add an event listener that reacts to the customer choosing one of the options. When an option is chosen, use window.alert to display a message that says which option the user chose.
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "technology") {
            //then set the "technologies" state to that "technologies" object within the orderBuilder object
            setTechnologies(parseInt(event.target.value))
        }
    }
)
 
// below for window alert
// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.id === "technology") {
//             let matchingTechnology = ""
//             for (const technology of technologies) {
//                 if (parseInt(event.target.value === technology.id)) {
//                     matchingTechnology += technology.technology
//                 }
//             }
//             window.alert(`You chose ${matchingTechnology}...meep morp...excellent decision`)
//             // below code is to set the state
//             //  setWheel(parseInt(event.target.value))
//         }
//     }
// )


//^ INSTRUCTION: In each of the modules, generate a <select> element that has child <option> elements as HTML representation of each object in the corresponding array in the database module.

//^ INSTRUCTION: build up the HTML for each select element. 

const techs = await getTechnologies();

// export const Technologies = () => {

//   return `<h2>Technologies</h2>
//     <select id="tech">
//         <option value="0">Select a technology package</option>
//         ${techs.map((tech) => {
//             return `<option value="${tech.id}">${tech.package}</option>`;
//           })
//           .join("")}
//     </select>`;
// };


//ORIGINAL VERSION BELOW BEFORE WORKING ON THIS BACK END
export const Technologies = () => {
    
    let html = "<h2>Technologies</h2>"    
    html += `<select id="technology">`
    html += `<option value="0">Choose your technology...</option>`
    
    // Use a for of loop for converting objects to <li> elements
    for (const technology of techs) {
        html += `<option value="${technology.id}">${technology.package}</option>`
    }

    html += "</select>"
    return html
}
