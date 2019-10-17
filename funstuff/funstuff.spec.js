const Stuff = require("./funstuff-model.js")
const db = require("../data/dbConfig.js")

// describe("funstuff model", () => {

// })

describe("addStuff", () => {
    it ("should add a fun thing to the database", async () => {
        await Stuff.addStuff({ fun_thing: "milkshakes"})
        const stuff = await db("funstuff");
        let i = stuff.length;
        expect(stuff).toHaveLength(i++);
    })
})