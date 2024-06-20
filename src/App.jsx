function App() {
  return (
    <div class="text-white flex flex-col items-center gap-y-4 mt-8">
      <h1 class="text-5xl font-mono uppercase font-bold">My React CV App</h1>
      
      <div class="text-center">
        <h2 class="text-xl font-mono uppercase font-bold">General Info Component</h2>
        <p>name</p>
        <p>email</p>
        <p>phone</p>
        <div class="mt-2">
          <button class=" bg-gray-500 mx-1 px-1 rounded">Edit</button>
          <button class=" bg-amber-600 mx-1 px-1 rounded">Submit</button>
        </div>
      </div>
      <div class="text-center">
        <h2 class="text-xl font-mono uppercase font-bold">Edcuational Experience Component</h2>
        <p>school name</p>
        <p>title of study</p>
        <p>date of study</p>
        <div class="mt-2">
          <button class=" bg-gray-500 mx-1 px-1 rounded">Edit</button>
          <button class=" bg-amber-600 mx-1 px-1 rounded">Submit</button>
        </div>
      </div>
      <div class="text-center">
        <h2 class="text-xl font-mono uppercase font-bold">Practical Experience</h2>
        <p>company name</p>
        <p>experience</p>
        <p>main responsibilities of job</p>
        <p>working dates - start and end</p>
        <div class="mt-2">
          <button class=" bg-gray-500 mx-1 px-1 rounded">Edit</button>
          <button class=" bg-amber-600 mx-1 px-1 rounded">Submit</button>
        </div>
      </div>

    </div>
  )
}

export default App
