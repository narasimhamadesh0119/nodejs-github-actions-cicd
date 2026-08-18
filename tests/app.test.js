// const { exec } = require("child_process");

// describe("Node.js Application Test", () => {
//   test("application should start successfully", (done) => {
//     const app = exec("node app.js");

//     setTimeout(() => {
//       app.kill();
//       expect(true).toBe(true);
//       done();
//     }, 2000);
//   });
// });


// const request = require("supertest");
// const app = require("../app");

// describe("GET /", () => {
//   test("should return GitHub Actions are working fine", async () => {
//     const response = await request(app).get("/");

//     expect(response.statusCode).toBe(200);
//     expect(response.text).toBe("GitHub Actions are working fine");
//   });
// });


const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  test("should return status 200", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
  });
});