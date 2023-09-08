import { getInteriors, setInteriors } from "./database.js"


//^ INSTRUCTION: Add an event listener that reacts to the customer choosing one of the options. When an option is chosen, use window.alert to display a message that says which option the user chose.
document.addEventListener(
    "change",
    (event) => {
        //if the clicked event id equals "interior" on line 39 for example...
        if (event.target.id === "interior") {
            //then set the interior state to that interior object within the orderBuilder object
            setInteriors(parseInt(event.target.value))
        }
    }
    );
    
    
    //! Below code is for the window alert on event change
    //document.addEventListener(
        //   "change",
        //   (event) =>
        //         let matchingInterior = ""
        //         for (const interior of interiors) {
            //              if (parseInt(event.target.value) === interior.id) {
                //                    matchingInterior += interior.type
                //                 }
                //             }
                //             window.alert(`You chose ${matchingInterior}...smoooooth`)
                //         }
                //     }
                // )
                
                
//^ INSTRUCTION: In each of the modules, generate a <select> element that has child <option> elements as HTML representation of each object in the corresponding array in the database module.

//^ INSTRUCTION: build up the HTML for each select element. I'll use .map method here.


//* BACK END ALTERATION: Add an "await" on the getPaints function. We would have to use an async first if this getPaints function was not top-level 
const interiors = await getInteriors();

export const Interiors = () => {
    let html = "<h2>Interiors</h2>"
    html += `<select id="interior">`
    html += `<option value="0">Choose your interior...</option>`
        
    // Use .map() for converting objects to <li> elements
    // So an object (interior) comes into your function, and a string gets returned. 
    // That string goes into a new array.
    // the first interior object gets inserted through the interior parameter below, then the second one, third one, etc to build up this drop-down menu with each interior as an option. The .map method loops through the array like a for...of loop
    const arrayOfInteriors = interiors.map((interior) => {
        return `<option value="${interior.id}">${interior.material}</option>` //* The new database is a .NET API where I have "material" as a property instead of "type" here, so I've updated the request to "interior.material" instead of "material.type"
    }
    )
    html += arrayOfInteriors.join("")
    html += "</select>"
    return html
}
