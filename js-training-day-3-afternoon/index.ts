import axios from "axios";
// Define User, Post, and Todo interfaces based on the JSONPlaceholder API structure.

interface User {
  id: number;
  name: string;
}

interface Post {
  userId: number;
  id: number;
  // title:string;
  // body: string;
}

interface Todo {
  userId: number;
  id: number;
}

// Create a variable let isLoading = false.
let isLoading = false;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function fetchUser(): Promise<User> {
  // try the api and make it wait
  try {
    const request = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    // Set it to true immediately when the page starts loading, and log “--- UI: Spinner visible---”.
    let isLoading = true;
    console.log("--- UI: Spinner visible ---");
    // First, fetch the User (ID: 1). We can’t load posts if we don't know who the user is.
    const userProfile: User = {
      id: request.data.id,
      name: request.data.name,
    };
    console.log(userProfile);
    return userProfile;
    // If this fails, throw an error.
  } catch (error) {
    console.log("error");
    throw error;
    // Set it to false when everything is finished (using finally),
    // so the spinner disappears even if errors occur. Log “--- UI: Spinner hidden ---”
  } finally {
    let isLoading = false;
    console.log("--- UI: Spinner hidden ---");
  }
}
// fetchUser();

async function fetchPosts() {
  try {
    const request = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const userPosts: Post[] = request.data.filter((item) => item.userId === 1);
    // console.log(userPosts);
    //   count length of array
    const postCount = userPosts.length;
    console.log(postCount);
    return postCount;
  } catch (error) {
    console.log("error");
    throw error;
  }
}

// fetchPosts();

async function fetchTodos() {
  try {
    const request = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const userTodos: Todo[] = request.data.filter((item) => item.userId === 1);
    const todosCount = userTodos.length;
    console.log(todosCount);
    return todosCount;
  } catch (error) {
    console.log("error");
    throw error;
  }
}

// fetchTodos();

async function callingFunctions(): Promise<void> {
  const [postCount, todosCount] = await Promise.all([
    fetchPosts(),
    fetchTodos(),
  ]);
  const user = await fetchUser();
  const name = user.name;
  // Log a summary: “User [Name] has [X] posts and [Y] todos.”
  console.log(
    `User [${name}] has [${postCount}] posts and [${todosCount}] todos`
  );
}

callingFunctions();
