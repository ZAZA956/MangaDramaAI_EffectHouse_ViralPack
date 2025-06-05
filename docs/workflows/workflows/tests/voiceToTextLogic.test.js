import { voiceToText } from "../scripts/voiceToTextLogic.js";

test("Should convert audio input to text", () => {
  const result = voiceToText("sample audio input");
  expect(result).toBe("Sample transcribed text from audio input.");
});
