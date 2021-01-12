import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
   test("Status from props should be in the state", () => {
      const component = create(<ProfileStatus status="it-kamasutra.com" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("it-kamasutra.com");
   });

   test("After creation <span> with status should be displayed", () => {
      const component = create(<ProfileStatus status="it-kamasutra.com" />);
      const root = component.root;
      const span = root.findByType("span");
      expect(span).not.toBeNull();
   });

   test("After creation <input> with status shouldn't be displayed", () => {
      const component = create(<ProfileStatus status="it-kamasutra.com" />);
      const root = component.root;

      expect(() => {
         const input = root.findByType("input");
      }).toThrow();
   });

   test("After creation <span> with status should be displayed with correct status", () => {
      const component = create(<ProfileStatus status="it-kamasutra.com" />);
      const root = component.root;
      const span = root.findByType("span");
      expect(span.children[0]).toBe("it-kamasutra.com");
   });

   test("Callback should be called", () => {
      const mockCallBack = jest.fn();
      const component = create(
         <ProfileStatus status="it-kamasutra.com" updateStatus={mockCallBack} />
      );
      const instance = component.getInstance();
      instance.deactivateEditMode();
      expect(mockCallBack.mock.calls.length).toBe(1);
   });
});
