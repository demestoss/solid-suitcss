import createClassName from "../lib/createClassName";

const COMPONENT_NAME = "MyComponent";
const NAMESPACE = "mine";
const DESCENDANT_NAME = "header";
const MODIFIERS_ARRAY = ["outline", "primary"];
const MODIFIERS_STRING = "outline primary";
const UTILITIES_ARRAY = ["mb-10", "fitContent"];
const UTILITIES_STRING = "mb-10 fitContent";
const STATES_ARRAY = ["active", "disabled"];
const STATES_STRING = "active disabled";
const ADDITIONAL_CLASS = "something";

const UTILITY_PREFIX = "u-";
const STATE_PREFIX = "is-";

const getCorrectString = (
  arrayLike: string | Array<string>,
  prefix: string
): string => {
  if (typeof arrayLike === "string") {
    arrayLike = arrayLike.split(" ");
  }
  return arrayLike.reduce((acc, val) => [...acc, `${prefix}${val}`], []).join(' ');
};

describe("Test createClassName function", () => {
  describe("Component name without namespace", () => {
    const getClassName = createClassName(COMPONENT_NAME);

    it("Base component name", () => {
      expect(getClassName()).toBe(COMPONENT_NAME);
    });

    it("Component name with namespace", () => {
      expect(getClassName({ namespace: NAMESPACE })).toBe(
        `${NAMESPACE}-${COMPONENT_NAME}`
      );
    });

    it("Apply modifiers array", () => {
      expect(getClassName({ modifiers: MODIFIERS_ARRAY })).toBe(
        `${COMPONENT_NAME} ${getCorrectString(
          MODIFIERS_ARRAY,
          `${COMPONENT_NAME}--`
        )}`
      );
    });

    it("Apply modifiers string", () => {
      expect(getClassName({ modifiers: MODIFIERS_STRING })).toBe(
        `${COMPONENT_NAME} ${getCorrectString(
          MODIFIERS_STRING,
          `${COMPONENT_NAME}--`
        )}`
      );
    });

    it("Apply utilities array", () => {
      expect(getClassName({ utilities: UTILITIES_ARRAY })).toBe(
        `${COMPONENT_NAME} ${getCorrectString(UTILITIES_ARRAY, UTILITY_PREFIX)}`
      );
    });

    it("Apply utilities string", () => {
      expect(getClassName({ utilities: UTILITIES_STRING })).toBe(
        `${COMPONENT_NAME} ${getCorrectString(
          UTILITIES_STRING,
          UTILITY_PREFIX
        )}`
      );
    });

    it("Apply states array", () => {
      expect(getClassName({ states: STATES_ARRAY })).toBe(
        `${COMPONENT_NAME} ${getCorrectString(STATES_ARRAY, STATE_PREFIX)}`
      );
    });

    it("Apply states string", () => {
      expect(getClassName({ states: STATES_STRING })).toBe(
        `${COMPONENT_NAME} ${getCorrectString(STATES_STRING, STATE_PREFIX)}`
      );
    });

    it("Add descendant name", () => {
      expect(getClassName({ descendantName: DESCENDANT_NAME })).toBe(
        `${COMPONENT_NAME}-${DESCENDANT_NAME}`
      );
    });

    it("Add descendant name with modifiers", () => {
      const componentDescendant = `${COMPONENT_NAME}-${DESCENDANT_NAME}`;

      expect(
        getClassName({
          descendantName: DESCENDANT_NAME,
          modifiers: MODIFIERS_ARRAY,
        })
      ).toBe(
        `${componentDescendant} ${getCorrectString(
          MODIFIERS_ARRAY,
          `${componentDescendant}--`
        )}`
      );
    });

    it("Add additional class", () => {
      expect(getClassName({ className: ADDITIONAL_CLASS })).toBe(
        `${COMPONENT_NAME} ${ADDITIONAL_CLASS}`
      );
    });

    it("Reassign component name", () => {
      expect(getClassName({ componentName: "App" })).toBe("App");
    });
  });

  describe("Component with namespace", () => {
    const getClassName = createClassName(COMPONENT_NAME, NAMESPACE);

    it("Base component name", () => {
      expect(getClassName()).toBe(`${NAMESPACE}-${COMPONENT_NAME}`);
    });

    it("Reassign component namespace", () => {
      const reassignedNamespace = "reassigned";

      expect(getClassName({ namespace: reassignedNamespace })).toBe(
        `${reassignedNamespace}-${COMPONENT_NAME}`
      );
    });

    it("Apply modifiers string", () => {
      expect(getClassName({ modifiers: MODIFIERS_STRING })).toBe(
        `${NAMESPACE}-${COMPONENT_NAME} ${getCorrectString(
          MODIFIERS_STRING,
          `${NAMESPACE}-${COMPONENT_NAME}--`
        )}`
      );
    });

    it("Add descendant name with modifiers", () => {
      const componentDescendant = `${NAMESPACE}-${COMPONENT_NAME}-${DESCENDANT_NAME}`;

      expect(
        getClassName({
          descendantName: DESCENDANT_NAME,
          modifiers: MODIFIERS_ARRAY,
        })
      ).toBe(
        `${componentDescendant} ${getCorrectString(
          MODIFIERS_ARRAY,
          `${componentDescendant}--`
        )}`
      );
    });
  });

  describe("Reassign component name", () => {
    const getClassName = createClassName(COMPONENT_NAME);
    const newComponentName = "App";

    it("Base name", () => {
      expect(getClassName({ componentName: newComponentName })).toBe(
        newComponentName
      );
    });

    it("Set component namespace", () => {
      expect(
        getClassName({ componentName: newComponentName, namespace: NAMESPACE })
      ).toBe(`${NAMESPACE}-${newComponentName}`);
    });

    it("Apply modifiers string", () => {
      expect(
        getClassName({
          componentName: newComponentName,
          modifiers: MODIFIERS_STRING,
        })
      ).toBe(
        `${newComponentName} ${getCorrectString(
          MODIFIERS_STRING,
          `${newComponentName}--`
        )}`
      );
    });

    it("Add descendant name with modifiers", () => {
      const componentDescendant = `${newComponentName}-${DESCENDANT_NAME}`;

      expect(
        getClassName({
          componentName: newComponentName,
          descendantName: DESCENDANT_NAME,
          modifiers: MODIFIERS_ARRAY,
        })
      ).toBe(
        `${componentDescendant} ${getCorrectString(
          MODIFIERS_ARRAY,
          `${componentDescendant}--`
        )}`
      );
    });
  });
});
