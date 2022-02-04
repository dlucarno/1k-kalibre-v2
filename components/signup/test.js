import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div>
      {/* loop over the posts and show them */}
      {posts &&
        posts.map((post) => (
          <Link href={`/${post.Slug}`} key={post.id}>
            <a>
              <h2>{post.Title}</h2>
              <div>{post.User.username}</div>
            </a>
          </Link>
        ))}
    </div>
  );
}

export async function getStaticProps() {
  // get posts from our api
  const res = await fetch("http://localhost:1337/posts");
  const posts = await res.json();

  return {
    props: { posts },
  };
}


const addTodo = async (todoText) => {
    if (todoText && todoText.length > 0) {
      const result = await axios.post("http://localhost:1337/todos", {
        todoText: todoText,
      });
      setTodos([...todos, result?.data]);
    }
  };


  function AddTodo({ addTodo }) {
    return (
      <>
        <div className="addTodoContainer">
          <input
            className="todoInputText"
            type="text"
            placeholder="Add new todo here..."
            id="todoText"
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                addTodo(todoText.value);
                todoText.value = "";
              }
            }}
          />
          <input
            className="todoInputButton"
            type="button"
            value="Add Todo"
            onClick={() => {
              addTodo(todoText.value);
              todoText.value = "";
            }}
          />
        </div>
      </>
    );
  }
  