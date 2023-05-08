import { useState, MouseEvent } from "react";

interface Post {
  title: string;
  subtitle: string;
  author: string;
  createdAt: string;
}

type Event = MouseEvent<HTMLButtonElement>;

const SetPosts = () => {
  const INITIAL_POST: Post = {
    title: "",
    subtitle: "",
    author: "",
    createdAt: "",
  };
  const [isLogged, setIsLogged] = useState(false);
  const [post, setPost] = useState(INITIAL_POST);
  const [posts, setPosts] = useState<[] | Post[]>([]);
  console.log(isLogged);

  const createNewPost = (e: Event) => {
    e.preventDefault();
    setPosts(prev => [
      ...prev,
      { ...post, createdAt: new Date().toLocaleString() },
    ]);
    return setPost(INITIAL_POST);
  };

  return (
    <div>
      <button onClick={() => setIsLogged(prev => !prev)}>
        {isLogged ? "logged" : "not logged"}
      </button>
      {!!isLogged && (
        <form>
          <h1>{post.title}</h1>
          <h2>{post.subtitle}</h2>
          <p>Author: {post.author}</p>
          <input
            type="text"
            placeholder="Enter title"
            onChange={e => setPost({ ...post, title: e.target.value })}
            value={post.title}
            name="title"
          />
          <br />
          <input
            type="text"
            placeholder="Enter subtitle"
            onChange={e => setPost({ ...post, subtitle: e.target.value })}
            value={post.subtitle}
            name="subtitle"
          />
          <br />
          <input
            type="text"
            placeholder="Enter author"
            onChange={e => setPost({ ...post, author: e.target.value })}
            value={post.author}
            name="author"
          />
          <br />
          <button
            onClick={createNewPost}
            disabled={!post.title || !post.subtitle || !post.author}>
            Create
          </button>
        </form>
      )}

      {!!posts.length && !!isLogged && (
        <table border={1}>
          <thead>
            <tr>
              <th>no.</th>
              <th>title</th>
              <th>subtitle</th>
              <th>author</th>
              <th>created at</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{post.title}</td>
                <td>{post.subtitle}</td>
                <td>{post.author}</td>
                <td>{post.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SetPosts;
