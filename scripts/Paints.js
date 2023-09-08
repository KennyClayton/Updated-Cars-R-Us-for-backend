import { getPaints, setPaints } from "./database.js"


//^ INSTRUCTION: Add an event listener that reacts to the customer choosing one of the options. When an option is chosen, use window.alert to display a message that says which option the user chose.
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paint") {
            //then set the interior state to that interior object within the orderBuilder object
            setPaints(parseInt(event.target.value))
        }
    }
)
 

//^ INSTRUCTION: In each of the modules, generate a <select> element that has child <option> elements as HTML representation of each object in the corresponding array in the database module.

//^ INSTRUCTION: build up the HTML for each select element. I'll use .map method here.

//* BACK END ALTERATION: Add an "await" on the getPaints function. We would have to use an async first if this getPaints function was not top-level 
//? Not sure what it means top level of the module. I think it means it is globally scoped in this module.
const paints = await getPaints(); // so we scope this variable to hold our Paint objcts to the entire module, and take it out of the Paints function itself. We add the "await" keyword for asynchronous functionality...so instead of the program stalling while it retrieves these paint objects, telling it to "await" will allow the program to keep reading and executing the code below this.

export const Paints = () => {
    let html = "<h2>Paints</h2>"
    html += `<select id="paint">`
    html += `<option value="0">Choose your paint...</option>`
    
    // Use .map() for converting objects to <li> elementsthe first paint object gets inserted through the paint parameter below, then the second one, third one, etc to build up this drop-down menu with each paint as an option. The .map method loops through the array like a for...of loop
    // So an object (paint) comes into your function, and a string gets returned. 
    // That string goes into a new array.
    const arrayOfPaints = paints.map((paint) => {
        return `<option value="${paint.id}">${paint.color}</option>`
    }
    )
    html += arrayOfPaints.join("")
    html += "</select>"
    return html
}
