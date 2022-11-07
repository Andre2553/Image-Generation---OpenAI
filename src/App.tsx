import { useCallback, useState } from "react";
import { api } from "./services/axios";

interface IResponse {
  created: number;
  data: string[];
}
function App() {
  //const [text, setText] = useState("");
  const [result, setResult] = useState<IResponse>();

  const handleCreateImageAxios = useCallback(() => {
    api
      .post("images/generations", {
        prompt: "A cute baby sea otter",
        n: 2,
        size: "1024x1024",
      })
      .then((resp) => {
        setResult(resp.data);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <button onClick={handleCreateImageAxios}>Create Image</button>
    </div>
  );
}

export default App;
