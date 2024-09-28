// import React from 'react'
// import SnakeGame from '../Game/SnakeGame'
// import TopBar from '../Shared/TopBar'

const Home = () => {
  return (
    <div>
          <div className=''>
    {/* <TopBar/> */}
<div className="flex flex-col md:flex-row rounded-lg blur-effect">
    <img src="src\assets\snakelord.png" alt=""  className="max-w-[500px] w-[400px] rounded-l-lg drop-shadow-md "/>
    
    <div className="flex flex-col text-left justify-center px-10">
    <p className="text-3xl font-bold ">SnakeZinger.com</p>
    <p className="w-[430px] my-4">a legendary serpent slithers through ancient forests and treacherous fjords. Known as Jörmungandr, this mythical snake must navigate through perilous terrains, evade fierce warriors, and uncover hidden treasures. As the player, you will guide Jörmungandr on an epic journey, mastering the art of stealth and strategy to survive in a world where danger lurks at every turn. Will you conquer the challenges and become a legend in the Viking sagas?</p>
    </div>

</div>
    {/* <SnakeGame/> */}
      </div>
    </div>
  )
}

export default Home