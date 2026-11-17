import "@testing-library/jest-dom/vitest";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
    //apres chaque test
  cleanup();//vide le faux navigateurs pour que chaque nouveau part d'une page propre
});