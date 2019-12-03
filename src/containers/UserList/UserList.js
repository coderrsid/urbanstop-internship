import React, { Component } from 'react';
import './UserList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default class UserList extends Component {
    render() {
        return (
            <div className="userlist">
                <h3>User List</h3>
                <div className="list">
                    <table className="table">
                        <tr>
                            <th>Camera Id</th>
                            <th>Officer Name</th>
                            <th>Address</th>
                            <th>Attendance</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>LPR-147845LO</td>
                            <td>John Doe</td>
                            <td>175, 5th main road, Vinayak Layout, Yelahanka New...</td>
                            <td>71%</td>
                            <td style={{ padding: '0px 5px' }}>
                                <div className="status">
                                    <div style={{ backgroundColor: 'rgb(14,44,43)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(27,105,104)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(85,210,208)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(14,44,43)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(187,238,237)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(255,555,255)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(187,238,237)' }} className="colorBox"></div>
                                </div>
                            </td>
                            <td>
                                <button className='small'>View More</button>
                                <button className='small'>Watch Live</button>
                                <button className='small'>More  <FontAwesomeIcon icon={faAngleDown} /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>LPR-147845LO</td>
                            <td>John Doe</td>
                            <td>175, 5th main road, Vinayak Layout, Yelahanka New...</td>
                            <td>71%</td>
                            <td style={{ padding: '0px 5px' }}>
                                <div className="status">
                                    <div style={{ backgroundColor: 'rgb(14,44,43)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(27,105,104)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(85,210,208)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(14,44,43)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(187,238,237)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(255,555,255)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(187,238,237)' }} className="colorBox"></div>
                                </div>
                            </td>
                            <td>
                                <button className='small'>View More</button>
                                <button className='small'>Watch Live</button>
                                <button className='small'>More  <FontAwesomeIcon icon={faAngleDown} /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>LPR-147845LO</td>
                            <td>John Doe</td>
                            <td>175, 5th main road, Vinayak Layout, Yelahanka New...</td>
                            <td>71%</td>
                            <td style={{ padding: '0px 5px' }}>
                                <div className="status">
                                    <div style={{ backgroundColor: 'rgb(14,44,43)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(27,105,104)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(85,210,208)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(14,44,43)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(187,238,237)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(255,555,255)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(187,238,237)' }} className="colorBox"></div>
                                </div>
                            </td>
                            <td>
                                <button className='small'>View More</button>
                                <button className='small'>Watch Live</button>
                                <button className='small'>More  <FontAwesomeIcon icon={faAngleDown} /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>LPR-147845LO</td>
                            <td>John Doe</td>
                            <td>175, 5th main road, Vinayak Layout, Yelahanka New...</td>
                            <td>71%</td>
                            <td style={{ padding: '0px 5px' }}>
                                <div className="status">
                                    <div style={{ backgroundColor: 'rgb(14,44,43)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(27,105,104)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(85,210,208)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(14,44,43)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(187,238,237)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(255,555,255)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(187,238,237)' }} className="colorBox"></div>
                                </div>
                            </td>
                            <td>
                                <button className='small'>View More</button>
                                <button className='small'>Watch Live</button>
                                <button className='small'>More  <FontAwesomeIcon icon={faAngleDown} /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>LPR-147845LO</td>
                            <td>John Doe</td>
                            <td>175, 5th main road, Vinayak Layout, Yelahanka New...</td>
                            <td>71%</td>
                            <td style={{ padding: '0px 5px' }}>
                                <div className="status">
                                    <div style={{ backgroundColor: 'rgb(14,44,43)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(27,105,104)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(85,210,208)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(14,44,43)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(187,238,237)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(255,555,255)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(187,238,237)' }} className="colorBox"></div>
                                </div>
                            </td>
                            <td>
                                <button className='small'>View More</button>
                                <button className='small'>Watch Live</button>
                                <button className='small'>More  <FontAwesomeIcon icon={faAngleDown} /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>LPR-147845LO</td>
                            <td>John Doe</td>
                            <td>175, 5th main road, Vinayak Layout, Yelahanka New...</td>
                            <td>71%</td>
                            <td style={{ padding: '0px 8px' }}>
                                <div className="status">
                                    <div style={{ backgroundColor: 'rgb(85,210,208)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(27,105,104)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(14,44,43)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(255,255,255)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(255,255,255)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(255,255,255)' }} className="colorBox"></div>
                                    <div style={{ backgroundColor: 'rgb(255,255,255)' }} className="colorBox"></div>
                                </div>
                            </td>
                            <td>
                                <button className='small'>View More</button>
                                <button className='small' style={{ paddingRight: '10px' }}>Watch Live</button>
                                <button className='small'>More  <FontAwesomeIcon icon={faAngleDown} /></button>
                            </td>
                        </tr>

                    </table>
                </div>
            </div>
        )
    }
}
