let world = {
    time: {
        year: 0,
        month: 0,
        week: 0,
        day: 0
    },
}

let cycle = 0

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
    console.log("the world looks like:")
    console.log(world)
}

const mainLoop = () => {
    updateWorld()
    cycle++
    //console.log(cycle)
}

setInterval(mainLoop, 250)