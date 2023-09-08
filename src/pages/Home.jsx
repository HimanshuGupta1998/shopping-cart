import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  async function fecthProductData() {
    setLoading(true)

    try {
      const res = await fetch(API_URL)
      const data = await res.json()
      setPosts(data)
    }
    catch (error) {
      console.log("Error aagya ji");
      setPosts([])
    }
    setLoading(false)
  }
  useEffect(() => {
    fecthProductData()
  }, [])

  return (
    <div className="flex items-center justify-start">
      {
        loading ? (
          <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h[100vh]">
            <Spinner />
          </div>
        ) : posts.length > 0 ?
            (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  max-w-6xl mx-auto space-y-10 space-x-5 min-h-[80vh]">
              {posts.map((post) => (
                  <Product key={post.id} post={post} />
                ))}
            </div>) : (

              <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[100vh]">

              <p className="text-xl font-bold">No Data Found</p>

              </div>
            )}
    </div>
  )
};

export default Home;
