import PostForm from "./components/PostForm"
import PostList from "./components/PostList"

function App() {

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Social App</h1>
      <PostForm />
      <PostList />
    </div>
  )
}

export default App
