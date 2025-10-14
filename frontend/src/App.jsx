import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/main/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="flex justify-center items-center mt-50 bg-red ">
      <h1 className="bg-violet-400 text-white p-10 uppercase  text-8xl">{data ? data.message : "Loading..."}</h1>
    </div>
  );
}

export default App;
