import { describe, expect, it } from "@jest/globals";
import IO from "../src/io";

const io = new IO();

describe("io tests", () => {
  it("listStudents() returns an array", async () => {
    expect(await io.listStudents()).toBeInstanceOf(Array);
  });

  it("fetchStudentProfile() must return an unknown ID object", async () => {
    expect(await io.fetchStudentProfile("unknown")).toEqual({ id: "unknown" });
  });

  it("fetchStudentProfile() must return Ali's profile object", async () => {
    expect(await io.fetchStudentProfile("WQ5rdt8Ec7KCo17q91Oy")).toHaveProperty("name", "Ali");
  });
});
