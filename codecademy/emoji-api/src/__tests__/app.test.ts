console.log = () => {};
import rewire from "rewire";
import { expect } from "chai";
import request from "supertest";
import express from "express";
import fs from "fs";
import path from "path";
import { IElement } from "../global";

const code = fs.readFileSync(
  path.resolve("__dirname", "..", "src", "server.ts"),
  "utf8"
);

describe("", function () {
  it("", function (done) {
    process.env.PORT = "8000";
    const serverModule = rewire("../server.ts");
    const server = serverModule.__get__("server");
    let animals: IElement[];
    const routerModule = rewire("../animals.ts");
    let singleAnimal: IElement;
    let animalToUpdate: IElement;
    const validAnimal = { name: "testGood", emoji: "test" };
    let createdAnimal: IElement;
    // Test that router responds to endpoints:
    const testServer = express();
    let animalsRouter;
    let validAnimalId: number | string;
    try {
      animalsRouter = routerModule.__get__("animalsRouter");
    } catch (e) {
      expect(e, "Did you create an export an `animalsRouter` from animals.ts?")
        .to.not.exist;
    }
    testServer.use("/animals", animalsRouter);
    testServer.listen(8001, () => {
      try {
        animals = routerModule.__get__("animals");
      } catch (e) {
        expect(e, "Did you move the `animals` array to animals.ts?").to.not
          .exist;
      }
      request(testServer)
        .get("/animals")
        .then((response) => {
          // We have to do these checks because of the way rewire/require works and a closure over the idCounter in `utils`
          expect(
            response.body,
            "Does your GET / route in `animalsRouter` return the `animals` array?"
          ).to.be.an.instanceof(Array);
          expect(
            response.body.length,
            "Did you use `seedElements` to properly seed your `animals` array? It should have 3 elements."
          ).to.be.at.least(3);
          expect(
            response.body.length,
            "Does your GET / route in `animalsRouter` return the `animals` array?"
          ).to.equal(animals.length);
        })
        .then(() => {
          return request(server).get("/animals");
        })
        .then((response) => {
          expect(
            response.body,
            "Does your GET / route in `animalsRouter` return the `animals` array?"
          ).to.be.an.instanceof(Array);
          expect(
            response.body.length,
            "Does your GET / route in `animalsRouter` return the `animals` array?"
          ).to.equal(animals.length);
          animals = response.body;
          validAnimalId = animals[0].id!;
        })
        .then(() => {
          return request(server).get(`/animals/${validAnimalId}`);
        })
        .then((response) => {
          expect(
            response.status,
            `Did you send a response from the GET /animals/:id route? ${validAnimalId}`
          ).to.equal(200);
          expect(
            response.body,
            "Did you send a single expression object instead of the whole array?"
          ).to.not.be.an.instanceof(Array);
          animals.find((element) => {
            return element.id === Number(validAnimalId);
          });
          expect(
            response.body.id,
            "Did you send back the correct animal by ID?"
          ).to.equal(1);
          singleAnimal = response.body;
        })
        .then(() => {
          animalToUpdate = Object.assign({}, singleAnimal, { name: "test" });
          return request(server).put("/animals/1").query(animalToUpdate);
        })
        .then((response) => {
          expect(
            response.status,
            "Did you move your PUT /animals/:id route handler to `animalsRouter` correctly?"
          ).to.equal(200);
          expect(
            response.body,
            "Did you send back a single animal object instead of the whole array?"
          ).to.not.be.an.instanceof(Array);
          expect(
            response.body,
            "Did you send back the updated animal?"
          ).to.deep.equal(animalToUpdate);
          return request(server)
            .get("/animals/1")
            .then((response) => {
              expect(
                response.body,
                "Did you still save the updated expression to the `animals` array?"
              ).to.deep.equal(animalToUpdate);
            });
        })
        .then(() => {
          return request(server).post("/animals").query(validAnimal);
        })
        .then((response) => {
          expect(
            response.body,
            "Did you send back a single animal object instead of the whole array from your POST route?"
          ).to.not.be.an.instanceof(Array);
          expect(
            response.status,
            "Did you mount your POST /animals router correctly in `animalsRouter`?"
          ).to.not.equal(404);
          expect(
            response.status,
            "Did you send a 201 response from the POST /animals route?"
          ).to.equal(201);
          let validPlusId = Object.assign(validAnimal, {
            id: response.body.id,
          });
          expect(
            response.body,
            "Did you send back the new animal?"
          ).to.deep.equal(validPlusId);
          createdAnimal = response.body;
          return request(server)
            .get(`/animals/${response.body.id}`)
            .then((response) => {
              expect(
                response.body,
                "Did you save the new animal to the `animals` array?"
              ).to.deep.equal(validPlusId);
            });
        })
        .then(() => {
          return request(server).delete(`/animals/${createdAnimal.id}`);
        })
        .then((response) => {
          let found = animals.find((element) => {
            return element.id === createdAnimal.id;
          });
          expect(
            found,
            "Does your DELETE /animals/:id route delete the proper element from the `animals` array?"
          ).to.not.be.ok;
          expect(
            response.status,
            "Did you send a 204 response from the POST /animals route?"
          ).to.equal(204);
          // Test code structure:
          const animalsRouteMatch = code.match(/\/animals/);
          expect(
            animalsRouteMatch?.length,
            "Did you remove extra /animals routes from server.ts?"
          ).to.not.be.greaterThan(2);
          const serverPutMatch = code.match(/server\.\s*put/);
          expect(
            serverPutMatch,
            "Did you remove extra PUT /animals routes from server.ts?"
          ).not.be.ok;
          const serverGetMatch = code.match(/server\.\s*get/);
          expect(
            serverGetMatch,
            "Did you remove extra /GET animals routes from server.ts?"
          ).not.be.ok;
          const serverPostMatch = code.match(/server\.\s*post/);
          expect(
            serverPostMatch,
            "Did you remove extra POST /animals routes from server.ts?"
          ).not.be.ok;
          const serverDeleteMatch = code.match(/server\.\s*delete/);
          expect(
            serverDeleteMatch,
            "Did you remove extra DELETE /animals routes from server.ts?"
          ).not.be.ok;
          done();
        })
        .catch(done);
    });
  });
});
