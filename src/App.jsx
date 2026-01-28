
const App = () => {
  const student = {
    name: "Devansh Chandra",
    regNo: "RA2311004010508",
    groupSelected: "yes"
  }

  const group = {
    name: "DevOps Engineers",
    mentor: "Mr. Andrew Smith",
    members: ["Devansh", "Akarsh", "Rahul"]
  }

  const notices = [
    "Tentative date for group assignment is 1/2/2026.",
    "All students must adhere to the rules"
  ]

  return (
    <div className="bg-linear-to-br from-zinc-950 via-gray-900 to-slate-800 min-h-screen text-white flex flex-col lg:grid gap-3 lg:grid-cols-4 lg:grid-rows-9 p-4 tracking-wide">
      <div className="p-1 lg:col-span-4 border-b-2 border-zinc-600 mb-2 rounded">
        <h1 className="text-4xl ">Group Selection Portal</h1>
      </div>
      <div className="bg-zinc-900 border-2 border-cyan-400 p-5 items-center  lg:row-span-3 rounded flex flex-col">
        <h2 className="text-2xl border-zinc-600 mb-3 border-b-2 w-full text-center">Student Details</h2>
        <p>Name: {student.name}</p>
        <p>Reg.no.: {student.regNo}</p>
        <p className="mb-4">Group Selected(yes/no): {student.groupSelected}</p>
        <button className="border-red-500 text-red-200 border-3 px-5 sm:w-1/6 lg:w-1/3  place-self-center py-1.5 rounded">Logout</button>
      </div>
      <div className="bg-zinc-900 border-2 border-emerald-300 p-5 lg:col-span-3 lg:row-span-7 rounded">
        <p className="text-2xl border-b-2 border-zinc-600 mb-2">Group: {group.name}</p>
        <p className="mb-3"><span className="text-xl">Faculty Mentor: </span>{group.mentor}</p>
        <p className="text-xl">Team Members:</p>
        <p>{group.members + ""}</p>
      </div>
      <div className="bg-zinc-900 border-2 border-fuchsia-300 p-5 lg:row-span-4 rounded flex flex-col items-center">
        <h2 className="text-2xl text-center w-full border-zinc-600 border-b-2 mb-2">Notices</h2>
        <p className="w-4/5 text-center leading-relaxed">{notices}</p>
      </div>
    </div>
  )
}

export default App