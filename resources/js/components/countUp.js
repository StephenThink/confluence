// Find thes the thing I want to Track
const tracking = document.querySelector('#trackMe');
const options = {
    root: null,
    threshold: 0.6,
    rootMargin: "-150px",
}
const theObserver = new IntersectionObserver(doSomething, options)

function doSomething(entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
        // Do Something when in view
counting();

    } else {
        console.log('no you dont!');
    }
};

theObserver.observe(tracking);


function counting() {
    // Selects the counter or the thing we want to count
    const counters = document.querySelectorAll('.counter');
    // Lower number the quicker the count
    const speed = 250;
    let i = 0;
    // Takes each counter and runs a function to update the numbers to the target
    counters.forEach(counter => {
        const updateCount = () => {
            // Reads the number from the data-target, the + is there to convert it from a string to a number
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;
            // If the number hasnt reached the target amount keep adding.
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 10)
            } else {
                count.innerText = target;
            }
        }

        updateCount();
    })
}
//     const countersLength = counters.length;
//     console.log(countersLength);
//
// //    Count up First Counter
//     console.log(counters[0]);
//     const updateCount = () => {
//         // Reads the number from the data-target, the + is there to convert it from a string to a number
//         const target = +counters[i].getAttribute('data-target');
//         const count = +counter[i].innerText;
//         const inc = target / speed;
//         // If the number hasnt reached the target amount keep adding.
//         if (count < target) {
//             counters[i].innerText = Math.ceil(count + inc);
//             setTimeout(updateCount, 1)
//         } else {
//             count.innerText = target;
//         }
//     }
//
//     updateCount();
//
