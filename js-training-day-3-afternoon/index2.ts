// 5. Extension (Retry Logic):
import axios from "axios";
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// APIs glitch. Write a helper function fetchWithRetry(url).
async function fetchWithRetry() {
  // It should try to fetch the URL.
  try {
    const request = await axios.get("https://fakeurl");
  } catch (error) {
    // If it fails, wait 2 seconds (using sleep from the guided lab), then try again.
    console.log("Failed, trying again in 2 seconds");
    await sleep(2000);
  }
  try {
    const request = await axios.get("https://fakeurl");
  } catch (error) {
    console.log("Failed, trying again in 2 seconds");
    await sleep(2000);
  }
  try {
    const request = await axios.get("https://fakeurl");
  } catch (error) {
    console.log("Failed");
    // If it fails 3 times, throw an error.
    await sleep(2000);
    throw error;
  }
  // Include logs to show what is happening, e.g. “Failed to fetch. Retrying in 2s... (1/3)”
}

fetchWithRetry();
