import './App.css'

function App() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white">
      <div className="h-[52rem] w-[48rem] rounded-3xl border border-gray-200 bg-white shadow ">
        <div className="h-[20rem] w-full rounded-t-3xl bg-[url('/weather.jpg')] bg-cover bg-center"></div>
        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 "></h5>
        <p className="font-normal text-gray-700 "></p>
      </div>
    </div>
  )
}

export default App
