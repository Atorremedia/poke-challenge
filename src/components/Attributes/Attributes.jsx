import React, { useEffect, useState } from 'react'
import { Tag } from 'antd';
import { Typography } from 'antd';

let shownAbilities = []
let shownTypes = []
let uniqueAbilities = []
let uniqueTypes = []

function Attributes({data}) {

    data.abilities.map((element) => {
      shownAbilities.push(<Tag key={element.ability.name}>{element.ability.name}</Tag>)
      })
    // uniqueAbilities = [... new Set(shownAbilities)]
    data.types.map((element) => {
      shownTypes.push(<Tag key={element.type.name}>{element.type.name}</Tag>)
      })
    // uniqueTypes = [... new Set(shownTypes)]


  return (
    <div className='app-section attribute-section'> 
{
  data && (
    <>
      <div className="attribute-name">
        <Typography.Text>ID</Typography.Text>
      </div>
      <div className="attribute-content">
        <Typography.Text>{data.id}</Typography.Text>
      </div>
      <div className="attribute-name">
        <Typography.Text>Height</Typography.Text>
      </div>
      <div className="attribute-content">
        <Typography.Text>{data.height}</Typography.Text>
      </div>
      <div className="attribute-name">
        <Typography.Text>Weight</Typography.Text>
      </div>
      <div className="attribute-content">
        <Typography.Text>{data.weight}</Typography.Text>
      </div>
      <div className="attribute-name">
        <Typography.Text>Abilities</Typography.Text>
      </div>
      <div className="attribute-content">
          {shownAbilities}
      </div>
      <div className="attribute-name">
        <Typography.Text>Type</Typography.Text>
      </div>
      <div className="attribute-content">
        {shownTypes}
      </div>
      </>
  )
}
      </div>
  )
}

export default Attributes