var assert = require("assert");
var request = require("supertest");

var request = request("http://localhost:8080/");

describe("CREATE AND REMOVE COLOR", () => {
  describe("POST", () => {
    it("Deberia retornar codigo 201 para indicar el color creado", (done) => {
      let color = {
        name: "test save",
        color: "#DECDBE",
        pantone: "13-1106",
        year: 2006,
      };

      request.post("api/color")
        .send(color)
        .expect(201)
        .then((response) => {
          assert(response.body.color.id !== null);
          done();
        });
    });
  });

  describe("POST", (res) => {
    it("Deberia retornar codigo 500 para indicar error al enviar un valor nulo", (done) => {
      let color = {
        name: null,
        color: "#DECDBE",
        pantone: "13-1106",
        year: 2006,
      };

      request.post("api/color").send(color).expect(500, done);
    });
  });
});

describe("GET COLOR", () => {
  describe("GET", () => {
    it("Deberia retonar codigo 200 y validar el formato json", (done) => {
      request
        .get("api/colores")
        .expect("Content-Type", /json/)
        .expect(200, done);
    });
  });

  describe("GET", (res) => {
    it("Deberia retornar codido 200 y validar que hay mas de 1 elemento en la base de datos", (done) => {
      request
        .get("api/colores")
        .expect(200)
        .then((response) => {
          assert(response.body.total_elementos > 0);
          done();
        });
    });
  });
});
