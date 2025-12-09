/**
 * @typedef ScenarioFile
 * @param {string} name - The name of the scenario file.
 * @param {number} scenarioFileVersion - The version of the scenario file standard
 * @param {Object} meta - Metadata about the scenario file, this is free form but may have some common things such as description
 * @param {string} meta.description - A description of the scenario file to be displayed when running
 */
const example = {
  name: "example",
  scenarioFileVersion: 1,
  meta: {
    description: "This is an example scenario file.",
  },
  situations: [
    {
      name: "Event Stream 1",
      events: [
        {
          name: "Event 1",
          timestamp: "0000-00-05T00:00:00Z",
          meta: {
            description: "This is the first event.",
          },
          body: {
            type: "text",
            content: "Hello, World!",
          },
        },
      ],
    },
    {
      name: "Event Stream 2",
      events: [],
    },
  ],
};
