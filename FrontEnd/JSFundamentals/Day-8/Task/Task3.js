// Rewrite with Async/Await (15 min)
// Rewrite your Task 2 usage with `async/await` and proper `try/catch` error handling. Test both a success case and a failure case (id = -1).

async function main() {
  
  try {
    const user = await getUserPromise(1);
    console.log("Success:", user);
  } catch (error) {
    console.error("Error:", error.message);
  } // Sucess case

  // Failure case
  try {
    const user = await getUserPromise(-1);
    console.log("Success:", user);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();