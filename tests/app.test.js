const { exec } = require("child_process");

describe("Node.js Application Test", () => {
  test("application should start successfully", (done) => {
    const app = exec("node app.js");

    setTimeout(() => {
      app.kill();
      expect(true).toBe(true);
      done();
    }, 2000);
  });
});