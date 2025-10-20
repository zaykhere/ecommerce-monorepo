import {auth} from "@clerk/nextjs/server";

const TestPage = async () => {
  const {getToken} = await auth();
  const token = await getToken();

  // const res = await fetch("http://localhost:8000/test", {
  //   headers: {
  //     Authorization: `Bearer ${token}`
  //   }
  // });
  // const data = await res.json();

  // console.log(data);

  const res = await fetch("http://localhost:8001/test", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const data = await res.json();

  console.log(data);
  return <div className="">TestPage</div>
}

export default TestPage;