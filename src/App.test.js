import { appTitle } from "./types/index.ts";

describe("UNIT TESTING", () => {
    test("ASSERT IF TITLE IS REACT", () => {
        expect(appTitle).toBe("WEATHER APP");
    });
});

// Your code must have at least 80 % code coverage, which
// means all your code must have unit, integration and
// snapshot test.You can check the coverage by running the
// command: ‘npm test--coverage