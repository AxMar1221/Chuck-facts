import React, { useState, Fragment, useRef, useEffect } from 'react';
import { Dropdown } from 'semantic-ui-react'
import { TypeJokeList } from '../typeJokeList/typeJokeList'
import './typeJoke.css'

export function TypeJoke({showJoke}) {
    const categories = [
            {key:"1", value:"animal"},
            {key:"2", value:"career"},
            {key:"3", value:"celebrity"},
            {key:"4", value:"dev"},
            {key:"5", value:"explicit"},
            {key:"6", value:"fashion"},
            {key:"7", value:"food"},
            {key:"8", value:"history"},
            {key:"9", value:"money"},
            {key:"10", value:"movie"},
            {key:"11", value:"music"},
            {key:"12", value:"political"},
            {key:"13", value:"religion"},
            {key:"14", value:"science"},
            {key:"15", value:"sport"},
            {key:"16", value:"travel"}
      ]

      const getJoke = (cat) =>{
        console.log(cat)
      }
    return (
        <Fragment>
            {
            categories.map((cat) =>
                <TypeJokeList showJoke={showJoke} item={cat.value}></TypeJokeList>
            )}
        </Fragment>
    )
}
