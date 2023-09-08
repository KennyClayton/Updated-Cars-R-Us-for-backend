// gather all car options from their modules
import { getInteriors, getPaints, getWheels, getTechnologies, getOrders } from "./database.js"

//^ INSTRUCTION: When the user clicks the button to place an order, take their currently chosen options (which are currently stored as state in the database) and construct a new order object to be placed in state.

// get access to the interior options/objects by assigning a variable 
const interiors = await getInteriors()
const technologies = await getTechnologies()
const paints = await getPaints()
const wheels = await getWheels()
const buildOrderListItem = async (order) => {

// right now i have 2 orders, so they should be displayed in the browser....but the properties are off somehow
export const Orders = async () => {
    const orders = getOrders(); //* chatGPT explains: "In the code you provided, await is used inside an async function to pause the execution of that function until the promise returned by the Orders() function resolves... "
    return `${orders.map((order) => 
      {
        const paint = paints.find((p) => p.Id === order.PaintId);
        const technology = technologies.find((t) => t.id === order.technologyId);
        const interior = interiors.find((i) => i.id === order.interiorId);
        const wheel = wheels.find((w) => w.id === order.wheelId);
  
        return `<section class="order">
                  ${order.paintColor} car with
                  ${order.wheel} wheels,
                  ${order.interior} interior,
                  and the ${order.technology}
                  for a total cost of
                  
              </section>`;
      })
      .join("")
    }`;
  };



//     // now we are going to make the buildOrderListItem function display "Order#1 cost $100" or whatever the total would be
//     // what do we need to display that?
//     // we need each option the user clicked...so let's pass "order" as a parameter so we can access the data for any given order



//     // now we have the interior objects to work with and we can reference "interiors" to use that data. 
//     // now we have to COMPARE the user's clicked item to all of the interior objects in our database (housed in the interiors array). We'll compare by the "id"...
//     // so we define a function called "foundInterior" that will find (using the .find method) the price of the interior the user clicked on.
//     // How?
//     // reference "interiors" and attach the find method with dot notation
//     const foundInterior = interiors.find(
//         // use a parameter (interior) that will represent each interior object of the interiors array that is being iterated over.
//         //* IMPORTANT: the .find() method iterates through an array
//         (interior) => {
//             // as we look at each interior object of the array, return the one (interior.id) that matched the user-clicked interior (order.interiorId) 
//             return interior.id === order.interiorsId
//         }
//     )

//     // get access to the paint options/objects by assigning a variable called "paints"

//     // again, //* here we want to find a match between the user-clicked paintId and the available paint options in the paints array
//     // so we define a function and use the find method on the paints array...
//     const foundPaint = paints.find(
//         // we use (paint) as a parameter since we will pass each paint object of the paints array through it for comparison to the user-clicked paint object.
//         // If the condition is true for any element in the paints array, the find method will return that element.
//         (paint) => {
//             // looking at each paint object, does it match the one clicked by the user? If so, return it to "foundPaint"
//             return paint.id === order.paintsId
//         }
//     )

//     // this will match the clicked technology Id to one of the technology objects
//     const foundTechnology = technologies.find(
//         (technology) => {
//             //* remember there is kind of an "if statement" built into the find method...so if the below matches, return it to foundTechnology
//             return technology.id === order.technologiesId
//         }
//     )

//     // this will match the clicked wheel Id to one of the wheel objects
//     const foundWheel = wheels.find(
//         (wheel) => {
//             //* remember there is kind of an "if statement" built into the find method...so if the below matches, return it to foundWheel
//             return wheel.id === order.wheelsId
//         }
//     )
//     //* at this point, all four options have been matched and those matching OBJECTS are in foundWheel, foundTechnology, foundPaint, foundInterior...what now?
//     // 
//     // now create a variable "totalCost" to hold the sum of each object's price added together 

//     const totalCost = foundWheel.price + foundPaint.price + foundInterior.price + foundTechnology.price
//     // then format it and hold the total cost in the costString variable...
//     const costString = totalCost.toLocaleString("en-US", {
//         style: "currency",
//         currency: "USD"
//     })
//     const timestamp = new Date().toLocaleString()
//     // and then return the string below as the final part of this function...
//     return `<li>
//     Order #${order.id} was placed on ${timestamp} and cost ${costString}.
// </li>`
// }


// const ordersData = await getOrders();
// // this Orders function will return an html string
// export const Orders = () => {
//     //we got access to the custom orders array of customorder objects...from the database... on line 81
//     // build an html string to show each custom order on it's own line (an unordered list which will have bullet points before each custom order)
//     let html = "<ul>"
//     // listItems variable holds the list of custom orders     
//     const listItems = ordersData.map(buildOrderListItem)
//     // then join each of those order objects in a list
//     html += listItems.join("")
//     html += "</ul>"

//     return html
// }

