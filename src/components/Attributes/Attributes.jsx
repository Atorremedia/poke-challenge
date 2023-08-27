import React from 'react'
import { Tag } from 'antd';
import { Typography } from 'antd';
import { types } from '../../config/appConfig';
import './Attributes.css'

const feetInMeter = 3.28084
const inchesInFeet = 12
const lbsinkg = 0.220462

function Attributes({data}) {

  let shownAbilities = []
  let shownTypes = []

  if(data) {
    data.abilities.map((element) => {
      shownAbilities.push(<Tag key={element.ability.name} style={{fontSize: 16, fontWeight: 600}}>{element.ability.name.toUpperCase()} </Tag>)
    })
    data.types.map((element) => {
      let type = element.type.name
      shownTypes.push(<Tag key={element.type.name} color={types[type].bgColor} style={{fontSize: 18}} className='type-tag' >{element.type.name}<span><img  className='type-icon' src={types[type].icon}></img></span></Tag>)
    })
  }

  return (
    <div className='app-section attribute-section'>
      { data && (
        <>
          <div className="attribute-name">
            <Typography.Text>ID</Typography.Text>
          </div>
          <div className="attribute-value">
            <Typography.Text>#{data.id}</Typography.Text>
          </div>
          <div className="attribute-name">
            <Typography.Text>Height</Typography.Text>
          </div>
          <div className="attribute-value">
            <Typography.Text>{data.height/10} m ( {Math.round(data.height/feetInMeter)}"{Math.round(data.height%feetInMeter*inchesInFeet)}' )</Typography.Text>
          </div>
          <div className="attribute-name">
            <Typography.Text>Weight</Typography.Text>
          </div>
          <div className="attribute-value">
            <Typography.Text>{data.weight/10} kg ( {(data.weight*lbsinkg).toFixed(1)} lbs )</Typography.Text>
          </div>
          <div className="attribute-name">
            <Typography.Text>Abilities</Typography.Text>
          </div>
          <div className="attribute-value">
              {shownAbilities}
          </div>
          <div className="attribute-name">
            <Typography.Text>Type</Typography.Text>
          </div>
          <div className="attribute-value">
            {shownTypes}
          </div>
        </>
      )}
    </div>
  )
}

export default Attributes