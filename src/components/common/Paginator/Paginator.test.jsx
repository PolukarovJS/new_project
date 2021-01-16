import React from "react";
import { create } from "react-test-renderer";
import Paginator from "./Paginator";

describe("Paginator component tests", () => {
   test("Pages count is 11 but should be showed only 10", () => {
      const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />);
      const root = component.root;
      let spans = root.findAllByType("span");
      expect(spans.length).toBe(10);
   });

   test("Pages count is 11 but should be showed only 10", () => {
      const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />);
      const root = component.root;
      let buttons = root.findAllByType("button");
      expect(buttons.length).toBe(1);
   });
});
