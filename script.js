// init variables

const mainDirectory = {
    name: 'Ada',
    content: [
        {
            name: 'Projets collectifs Ada',
            content: [
                {
                    name: 'Pico8',
                    content: [
                        {
                            name: 'mariokart.p8'
                        }]
                },
                {
                    name: 'Dataviz',
                    content: [
                        {
                            name: 'index.html'
                        },
                        {
                            name: 'script.js'
                        }
                    ]
                }
            ]
        },
        { name: 'CV.pdf' },
        {
            name: 'Projets persos',
            content: [
                {
                    name: 'Portfolio',
                    content: [
                        {
                            name: 'index.html'
                        },
                        {
                            name: 'script.js'
                        }
                    ]
                }]
        },
    ],
}


// init functions

function showDirectoryIterative(directory) {
    console.log(`D: ${directory.name}`);
    for (const el1 of directory.content) {
        if (el1.hasOwnProperty("content")) {
            console.log(`D: ${el1.name}`);
            for (const el2 of el1.content) {
                if (el2.hasOwnProperty("content")) {
                    console.log(`D: ${el2.name}`);
                    for (const el3 of el2.content) {
                        if (el3.hasOwnProperty("content")) {
                            console.log(`D: ${el3.name}`);
                        }
                        else {
                            console.log(`F: ${el3.name}`);
                        }
                    }
                }
                else {
                    console.log(`F: ${el2.name}`);
                }
            };
        }
        else {
            console.log(`F: ${el1.name}`);
        }
    }
}

function showDirectoryRecursive(directory) {
    if (directory.hasOwnProperty("content")) {
        console.log(`D: ${directory.name}`);
        directory.content.forEach(element => {
            showDirectoryRecursive(element);
        })
    }
    else {
        console.log(`F: ${directory.name}`);
    }
}


// execute code

console.log("Iterative:\n");
showDirectoryIterative(mainDirectory);
console.log("\nRecurcive:\n");
showDirectoryRecursive(mainDirectory);