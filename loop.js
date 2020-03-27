let cycle = 0

class Person {
    constructor(first,last,age) {
        this.firstName = first
        this.lastName = last
        this.gender = 
        this.age = age
        this.dob = cycle
    }
}


let world = {
    time: {
        year: 0,
        month: 0,
        week: 0,
        day: 0
    },
    space: {
        people: [
            new Person("Alex", "Decker", 20),
            new Person("Emily", "Gray", 20)
        ]
    }
}

const handleTime = () => {
    world.time.day++
    //handles weeks
    if (world.time.day === 8) {
        world.time.week++
        world.time.day = 0
    }

    //handles months
    if (world.time.week === 5) {
        world.time.month++
        world.time.week = 0
    }

    if (world.time.month === 13){
        world.time.year++
        world.time.month = 0
    }
}

const updateWorld = () => {
    handleTime()
    console.log(world.time)
    console.log(world.space.people)
}

const mainLoop = () => {
    updateWorld()
    cycle++
    //console.log(cycle)
}

setInterval(mainLoop, 250)