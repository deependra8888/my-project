import { AiFillCaretDown } from 'react-icons/ai';
import './App.css'

function App() {


  return (
    <>
      <div className='bg-[#0A66C1] text-white px-14  justify-center items-center overflow-y-hidden flex-col'>
        <Header />
        <Main />
      </div>
    </>
  )
}

export default App



const Header = () => {
  return (
    <>
      <header className='w-full '>
        <nav className='flex justify-between flex-col  py-2'>
          <div className='flex  justify-between'>
            <div className="flex gap-7">
              <div className='flex gap-2'>
                <hr className='h-6 w-0.5 bg-white rotate-12' />
                <h1 className='font-bold'>
                  in Job Sight</h1>
              </div>
              <ul className=' font-semibold flex gap-3 text-xs items-center'>
                <li>FIND JOBS</li>
                <li> FOR COMPANY</li>
                <li>PRICING</li>
              </ul>
            </div>
            <ul className=' font-semibold flex gap-3 items-center text-xs'>
              <li>POST YOUR JOB</li>
              <hr className='w-[1px] h-6 bg-white ' />
              <li>LOGIN</li>
            </ul>
          </div>
          <hr className='w-full h-[1.5px] bg-white mt-2' />
        </nav>
      </header>
    </>
  )
}

const Main = () => {
  return (
    <main className='flex  items-center flex-col gap-5 w-full my-6'>
      <div className='w-[60%]'>
        <h1 className='text-2xl font-bold text-center'>
          <span className='text-[#F6EDA1]'>AUTOMATIC </span>
          APPLYING TO JOBS IS STRESSFUL ELLOFRTLESSLY
        </h1>
        <p className='text-center text-[10px]'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, excepturi?
        </p>
      </div>
      <div className="flex my-6 justify-between items-center w-full ">
        <div className='text-sm'>
          <p>Find the best</p>
          <p className='font-bold'>career opportuinity</p>
          <p>for you</p>
        </div>

        <form className='flex justify-end items-end text-xs  gap-6' action="">
          <div className='flex gap-4'>
            <div className="flex font-semibold flex-col gap-1">
              <label htmlFor="">What?</label>
              <input placeholder='Profession Keyword' type="text" className='px-3 py-2 text-black' />
            </div>
            <div className="flex font-semibold flex-col gap-1">
              <label>Experience</label>
              <div className='relative'>
                <select  id="" className='px-5 py-2'>
                  <option className='px-2' value="02">

                  </option>
                  <option className='px-2' value="02">

                  </option>
                  <option className='px-2' value="02">

                  </option>

                </select>
                <AiFillCaretDown className='text-gray-500 absolute top-3 right-2'/>
              </div>

            </div>
            <div className="flex font-semibold flex-col gap-1">
              <label htmlFor="">Where?</label>
              <input placeholder='City Of Region' type="text" name="" id="" className='px-3 py-2  text-black' />
            </div>
          </div>
        </form>

        <button className='px-6 py-2 bg-yellow-300 text-black text-[10px]
        font-bold mt-5'>SEARCH NOW</button>
      </div>

      <div className="mt-5 gap-3 flex justify-center items-center">
        <p>Remote</p>
        <hr className='h-16 w-[1px] bg-white' />
        <p>MNC</p>
        <hr className='h-16 w-[1px] bg-white' />
        <p>Information Technology</p>
        <hr className='h-16 w-[1px] bg-white' />
        <p> KPO</p>
        <hr className='h-16 w-[1px] bg-white' />
        <p> BPO</p>
        <hr />
        <p>Accounting</p>
        <hr className='h-16 w-[1px] bg-white' />
      </div>
    </main>
  )
}

