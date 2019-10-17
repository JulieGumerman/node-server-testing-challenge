const Stuff = require("./funstuff-model.js");
const request = require("supertest");
const stuffRoute = require("./funstuff-route");
const db = require("../data/dbConfig.js");

// describe("funstuff model", () => {

// })

describe("stuff model", () => {
    beforeEach(async () => {
        await db("funstuff").truncate();
    })

    describe("addStuff", () => {
    it ("should add a fun thing to the database", async () => {
        await Stuff.addStuff({ fun_thing: "rainstorms"})
        const stuff = await db("funstuff");
        let i = stuff.length;
        expect(stuff).toHaveLength(i++);
    })

    })
})

describe("/ get", () => {
    it("should return a 200 status code on completion", () => {
        return request(stuffRoute)
            .get("/")
            .then(res => {
                expect(res.status).toBe(200);
            })
    })
})