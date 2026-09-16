// Promise Combinators in Practice (20 min)
// You have three async functions simulating API calls with different delays: `fetchUser()`, `fetchPosts()`, `fetchComments()` (some should randomly reject to test error handling).
// 1. Use `Promise.all` to fetch all three in parallel — log total time taken
// 2. Use `Promise.allSettled` and log which succeeded/failed
// 3. Use `Promise.race` with a `timeout(2000)` promise to implement a fetch timeout pattern

function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.3
        ? resolve({ id: 1, name: "Suhail" })
        : reject(new Error("User API failed"));
    }, 1000);
  });
}

function fetchPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.3
        ? resolve(["Post 1", "Post 2"])
        : reject(new Error("Posts API failed"));
    }, 1500);
  });
}

function fetchComments() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.3
        ? resolve(["Comment 1", "Comment 2"])
        : reject(new Error("Comments API failed"));
    }, 2000);
  });
}

// 1. Promise.all - Fetch all in parallel
async function fetchAllData() {
  const startTime = performance.now();

  try {
    const [user, posts, comments] = await Promise.all([
      fetchUser(),
      fetchPosts(),
      fetchComments()
    ]);

    console.log("All results:", { user, posts, comments });
  } catch (error) {
    console.error("Promise.all Error:", error.message);
  } finally {
    console.log(
      "Total time:",
      (performance.now() - startTime).toFixed(2),
      "ms"
    );
  }
}

// 2. Promise.allSettled - Track success/failure
async function fetchAllSettled() {
  const results = await Promise.allSettled([
    fetchUser(),
    fetchPosts(),
    fetchComments()
  ]);

  results.forEach((result, index) => {
    const names = ["User", "Posts", "Comments"];

    if (result.status === "fulfilled") {
      console.log(`${names[index]} succeeded:`, result.value);
    } else {
      console.log(`${names[index]} failed:`, result.reason.message);
    }
  });
}

// 3. Promise.race - Timeout pattern
function timeout(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Request timed out"));
    }, ms);
  });
}

async function fetchWithTimeout() {
  try {
    const result = await Promise.race([
      fetchUser(),
      timeout(2000)
    ]);

    console.log("Result:", result);
  } catch (error) {
    console.error("Timeout/Error:", error.message);
  }
}

// Run
fetchAllData();
fetchAllSettled();
fetchWithTimeout();