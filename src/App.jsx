import { Input, Typography } from 'antd';
import './App.css'
const { Search } = Input;

function App() {
  
  return (
    <div className='app-container'>
      <div className='app-section'> 
        <div className="searchbar-container">
          <Search placeholder="input search loading default" allowClear/>
        </div>
      </div>
      <div className='app-section'> 
        <div className="sprite-container">
          <img src="" alt="pokemon sprite" className="sprite" />
        </div>
        <div className="name-container">
          <Typography.Title level={2}>
            BULBASAUR
          </Typography.Title>
        </div>
      </div>
      <div className='app-section attribute-section'> 
          <div className="attribute-name">
            <Typography.Text>ID</Typography.Text>
          </div>
          <div className="attribute-content">
            <Typography.Text>#1</Typography.Text>
          </div>
          <div className="attribute-name">
            <Typography.Text>Height</Typography.Text>
          </div>
          <div className="attribute-content">
            <Typography.Text>0.7m ( 2"4')</Typography.Text>
          </div>
          <div className="attribute-name">
            <Typography.Text>Weight</Typography.Text>
          </div>
          <div className="attribute-content">
            <Typography.Text>6.9kg</Typography.Text>
          </div>
          <div className="attribute-name">
            <Typography.Text>Abilities</Typography.Text>
          </div>
          <div className="attribute-content">
            <Typography.Text>OVERGROW CHLOROPHYLL</Typography.Text>
          </div>
          <div className="attribute-name">
            <Typography.Text>Type</Typography.Text>
          </div>
          <div className="attribute-content">
            <Typography.Text>Grass Poison</Typography.Text>
          </div>
      </div>
      <div className='app-section stats'> 
        STATS
      </div>
    </div>
  )
}

export default App
