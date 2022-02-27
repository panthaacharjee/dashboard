import React, { useEffect, useState } from 'react'
import {AiOutlineFileSearch} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const CreateEvent = () => {
   
  return (
    <div className="create_event">
        <div className="create_event_history">
            <p> <span><AiOutlineFileSearch/></span> History</p>
        </div>
        <div className="create_event_content">
        <div className="create_event_box_content">
            <div className="page">
                              <div className="page_length"  style={{border : "1px solid red"}}>
                                  1
                              </div>
                              <div className="page_length" >
                                  2
                              </div>
                              <div className="page_length" >
                                  3
                              </div>
                          </div>
                          <div className="create_event_heading">
                          enter the possible outcomes of the event
                          </div>
                          <div className="input">
                            <p>Event Title</p>
                            <input type="text" />
                            <p>Category</p>
                            <input type="text" />
                            <p>Sub Category</p>
                            <input type="text" /> 
                          </div>
                          <div className="nxt_btn">
                              <button><NavLink to="/create-event/page2">Next</NavLink></button>
                          </div>
                </div>
        </div>
    </div>
  )
}

export default CreateEvent