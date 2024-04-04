import React from 'react';
import Member8 from '../../assets/members/member-08.jpeg';
import Member4 from '../../assets/members/member-04.jpeg';
import Member11 from '../../assets/members/member-11.jpeg';
import Member9 from '../../assets/members/member-09.jpeg';
import Member1 from '../../assets/members/member-01.jpeg';
import Member2 from '../../assets/members/member-02.jpeg';
import Member5 from '../../assets/members/member-05.jpeg';
import Member7 from '../../assets/members/member-07.jpeg';
import Member10 from '../../assets/members/member-10.jpeg';
const Table = ({ data }) => {
    console.log('data', data)
    return (
        <div>
            <div class="container-xl">
                <div class="row section-title">
                    <h2 class="fs-4">UnOpposed Table</h2>
                </div>
            </div>
            <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                    <tr>
                        <th>Candidate & Position</th>
                        <th>Total votes</th>
                        <th>Percentage (%)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src={Member8}
                                    alt=""
                                    style={{ width: '45px', height: '45px' }} // Corrected style attribute
                                    className="rounded-circle"
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">MUGISHA JOSHUA</p>
                                    <p className="text-muted mb-0">Speaker</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">{data.results.other_positions.speaker}</p>
                        </td>
                        <td>{((data?.results.other_positions.speaker / data?.total_votes) * 100).toFixed(2)}</td>
                    </tr>

                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src={Member4}
                                    alt=""
                                    style={{ width: '45px', height: '45px' }} // Corrected style attribute
                                    className="rounded-circle"
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">NAMULONDO FAITH</p>
                                    <p className="text-muted mb-0">Deputy Speaker</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">{data.results.other_positions.deputy_speaker}</p>
                        </td>
                        <td>{((data?.results.other_positions.deputy_speaker / data?.total_votes) * 100).toFixed(2)}</td>
                    </tr>

                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src={Member11}
                                    alt=""
                                    style={{ width: '45px', height: '45px' }} // Corrected style attribute
                                    className="rounded-circle"
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">ARYAMWIJUKA NIMLORD</p>
                                    <p className="text-muted mb-0">Finance Secretary</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">{data.results.other_positions.finance_secretary}</p>
                        </td>
                        <td>{((data?.results.other_positions.finance_secretary / data?.total_votes) * 100).toFixed(2)}</td>
                    </tr>

                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src={Member9}
                                    alt=""
                                    style={{ width: '45px', height: '45px' }} // Corrected style attribute
                                    className="rounded-circle"
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">ABER ZITA LOURDES</p>
                                    <p className="text-muted mb-0">Public Secretary</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">{data.results.other_positions.public_secretary}</p>
                        </td>
                        <td>{((data?.results.other_positions.public_secretary / data?.total_votes) * 100).toFixed(2)}</td>
                    </tr>

                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src={Member1}
                                    alt=""
                                    style={{ width: '45px', height: '45px' }} // Corrected style attribute
                                    className="rounded-circle"
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">KATITI MORIS MUGISHA</p>
                                    <p className="text-muted mb-0">General Secretary</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">{data.results.other_positions.general_secretary}</p>
                        </td>
                        <td>{((data?.results.other_positions.general_secretary / data?.total_votes) * 100).toFixed(2)}</td>
                    </tr>


                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src={Member2}
                                    alt=""
                                    style={{ width: '45px', height: '45px' }} // Corrected style attribute
                                    className="rounded-circle"
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">LWANGA ELYIN MUTEBI</p>
                                    <p className="text-muted mb-0">Games and Entertainment</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">{data.results.other_positions.games_ent}</p>
                        </td>
                        <td>{((data?.results.other_positions.games_ent / data?.total_votes) * 100).toFixed(2)}</td>
                    </tr>

                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src={Member5}
                                    alt=""
                                    style={{ width: '45px', height: '45px' }} // Corrected style attribute
                                    className="rounded-circle"
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">NUHIIRE FRANK</p>
                                    <p className="text-muted mb-0">Projects Cordinator</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">{data.results.other_positions.project_cord}</p>
                        </td>
                        <td>{((data?.results.other_positions.project_cord / data?.total_votes) * 100).toFixed(2)}</td>
                    </tr>

                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src={Member7}
                                    alt=""
                                    style={{ width: '45px', height: '45px' }} // Corrected style attribute
                                    className="rounded-circle"
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">TAYEBWA SANDRA</p>
                                    <p className="text-muted mb-0">Deputy Projects Cordinator</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">{data.results.other_positions.deputy_project_cord}</p>
                        </td>
                        <td>{((data?.results.other_positions.deputy_project_cord / data?.total_votes) * 100).toFixed(2)}</td>
                    </tr>

                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src={Member10}
                                    alt=""
                                    style={{ width: '45px', height: '45px' }} // Corrected style attribute
                                    className="rounded-circle"
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">BUKULU PAUL</p>
                                    <p className="text-muted mb-0">REPRESENTATIVE OF PERSONS WITH SPECIAL NEEDS</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">{data.results.other_positions.srwsn}</p>
                        </td>
                        <td>{((data?.results.other_positions.srwsn / data?.total_votes) * 100).toFixed(2)}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Table;
