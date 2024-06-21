function App() {
  return (
    <div className="text-white flex flex-col items-center gap-y-4">
      <h1 className="text-5xl font-mono uppercase font-bold">My React CV App</h1>
      <div className="text-center">
        <h2 className="text-xl font-mono uppercase font-bold">Edcuational Experience Component</h2>
        <p>school name</p>
        <p>title of study</p>
        <p>date of study</p>
        <div className="mt-2">
          <button className=" bg-gray-500 mx-1 px-1 rounded">Edit</button>
          <button className=" bg-amber-600 mx-1 px-1 rounded">Submit</button>
        </div>
      </div>
      {/* <div className="text-center">
        <h2 className="text-xl font-mono uppercase font-bold">Practical Experience</h2>
        <p>company name</p>
        <p>experience</p>
        <p>main responsibilities of job</p>
        <p>working dates - start and end</p>
        <div className="mt-2">
          <button className=" bg-gray-500 mx-1 px-1 rounded">Edit</button>
          <button className=" bg-amber-600 mx-1 px-1 rounded">Submit</button>
        </div>
      </div> */}

    </div>
  )
}

export default App
