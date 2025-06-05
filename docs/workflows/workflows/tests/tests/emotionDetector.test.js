import { detectEmotion } from "../scripts/emotionDetector.js";

test("Should detect emotion from input data", () => {
  const result = detectEmotion({ input: "sample" });
  expect(result.emotion).toBe("happy");
  expect(result.intensity).toBeGreaterThan(0);
});
