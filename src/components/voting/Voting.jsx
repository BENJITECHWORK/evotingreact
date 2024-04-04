import React, { useState } from 'react';
import Header from '../layouts/Header';

import Member13 from '../../assets/members/member-13.jpeg';
import Member3 from '../../assets/members/member-03.jpeg';
import Member12 from '../../assets/members/member-12.jpeg';
import Member6 from '../../assets/members/member-06.jpeg';
import Member11 from '../../assets/members/member-11.jpeg';
import Member1 from '../../assets/members/member-01.jpeg';
import Member2 from '../../assets/members/member-02.jpeg';
import Member4 from '../../assets/members/member-04.jpeg';
import Member7 from '../../assets/members/member-07.jpeg';
import Member5 from '../../assets/members/member-05.jpeg';
import Member8 from '../../assets/members/member-08.jpeg';
import Member10 from '../../assets/members/member-10.jpeg';
import Member9 from '../../assets/members/member-09.jpeg';
import Footer from '../layouts/Footer';
import ManifestoModel from '../layouts/ManifestoModel';
import { useForm } from 'react-hook-form';
import { addVoteApi } from '../../apis/apifunctions/voteApi';
import { useMutation } from '@tanstack/react-query';
import { errorNotification, notify } from '../../Toasts/toasts';

function Voting() {

    const [chairperson, setChairperson] = useState(0);
    const [vice_chairperson, setViceChairperson] = useState(0);
    const [others, setOthers] = useState({
        general_secretary: 0,
        finance_secretary: 0,
        games_ent: 0,
        deputy_speaker: 0,
        project_cord: 0,
        deputy_project_cord: 0,
        speaker: 0,
        srwsn: 0,
        public_secretary: 0
    });
    const userDetails = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

    const handleOthersVote = (position) => {
        setOthers(prevOthers => ({
            ...prevOthers,
            [position]: prevOthers[position] === 0 ? 1 : 0
        }));
    };

    const mutation = useMutation({
        mutationFn: addVoteApi
    });


    const onSubmit = (e) => {
        e.preventDefault();
        if (chairperson === 0 || vice_chairperson === 0) {
            errorNotification("Please vote for Chairperson and Vice Chairperson")
        } else {
            const data = {
                userId: userDetails.id,
                chairperson,
                vice_chairperson,
                ...others
            }
            mutation.mutate(data, {
                onSuccess: (data) => {
                    notify(data.message)
                },
                onError: (data) => {
                    errorNotification(data.message)
                }
            });

        }
    }
    return (
        <div>
            <Header />
            <form onSubmit={onSubmit}>
                <div class="container-xl big-padding">
                    <div class="row section-title">
                        <h2 class="fs-4">Mufasa - ChairPerson</h2>
                    </div>
                    <div class="row">
                        <div className="col-lg-4 col-md-6">
                            <div class="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                                <img class="rounded-pill shadow-md p-2" src={Member13} alt="" />
                                <h4 class="mt-3 fs-5 mb-1 fw-bold">SYAKENGWA BRIAN</h4>
                                <h6 class="fs-7">Running to Be: <span class="text-primary fw-bold">ChairPerson</span></h6>
                                <button
                                    type="button"
                                    className={`btn ${chairperson === 1 ? 'btn-success' : 'btn-danger'} fw-bolder px-4 ms-2 fs-8`}
                                    onClick={() => setChairperson(1)}
                                >
                                    {chairperson === 1 ? "Voted" : "Vote"}
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div class="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                                <img class="rounded-pill shadow-md p-2" src={Member3} alt="" />
                                <h4 class="mt-3 fs-5 mb-1 fw-bold">NUWAMANYA AIVAN</h4>
                                <h6 class="fs-7">Running to Be: <span class="text-primary fw-bold">ChairPerson</span></h6>

                                <button
                                    type="button"
                                    class={`btn ${chairperson === 2 ? 'btn-success' : 'btn-danger'} fw-bolder px-4 ms-2 fs-8`}
                                    onClick={() => setChairperson(2)}
                                >
                                    {chairperson === 2 ? "Voted" : "Vote"}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Vice Chairperson */}
                    <div class="row section-title">
                        <h2 class="fs-4">Vice ChairPerson</h2>
                    </div>
                    <div class="row">
                        <div className="col-lg-4 col-md-6">
                            <div class="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                                <img class="rounded-pill shadow-md p-2" src={Member12} alt="" />
                                <h4 class="mt-3 fs-5 mb-1 fw-bold">MUGEMA BRIAN</h4>
                                <h6 class="fs-7">Running to Be: <span class="text-primary fw-bold">Vice Chairperson</span></h6>
                                <button
                                    type="button"
                                    class={`btn ${vice_chairperson === 1 ? 'btn-success' : 'btn-danger'} fw-bolder px-4 ms-2 fs-8`}
                                    onClick={() => setViceChairperson(1)}
                                >
                                    {vice_chairperson === 1 ? "Voted" : "Vote"}
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div class="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                                <img class="rounded-pill shadow-md p-2" src={Member6} alt="" />
                                <h4 class="mt-3 fs-5 mb-1 fw-bold">MAZIMA WINNIE</h4>
                                <h6 class="fs-7">Running to Be: <span class="text-primary fw-bold">Vice Chairperson</span></h6>
                                <button
                                    type="button"
                                    class={`btn ${vice_chairperson === 2 ? 'btn-success' : 'btn-danger'} fw-bolder px-4 ms-2 fs-8`}
                                    onClick={() => setViceChairperson(2)}
                                >
                                    {vice_chairperson === 2 ? "Voted" : "Vote"}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Others */}
                    <div class="row section-title">
                        <h2 class="fs-4">UnOpposed</h2>

                    </div>
                    <div class="row">
                        <div className="col-lg-4 col-md-6">
                            <div class="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                                <img class="rounded-pill shadow-md p-2" src={Member8} alt="" />
                                <h4 class="mt-3 fs-5 mb-1 fw-bold">MUGISHA JOSHUA</h4>
                                <h6 class="fs-7">Running to Be: <span class="text-primary fw-bold">Speaker</span></h6>
                                <button
                                    type="button"
                                    class={`btn ${others.speaker === 1 ? 'btn-success' : 'btn-danger'} fw-bolder px-4 ms-2 fs-8`}
                                    onClick={() => handleOthersVote('speaker')}
                                >
                                    {others.speaker === 0 ? 'Vote' : 'Voted'}
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div class="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                                <img class="rounded-pill shadow-md p-2" src={Member4} alt="" />
                                <h4 class="mt-3 fs-5 mb-1 fw-bold">NAMULONDO FAITH</h4>
                                <h6 class="fs-7">Running to Be: <span class="text-primary fw-bold">Deputy Speaker</span></h6>
                                <button
                                    type="button"
                                    onClick={() => handleOthersVote('deputy_speaker')}
                                    class={`btn ${others.deputy_speaker === 1 ? 'btn-success' : 'btn-danger'} fw-bolder px-4 ms-2 fs-8`}>
                                    {others.deputy_speaker === 0 ? 'Vote' : 'Voted'}
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div class="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                                <img class="rounded-pill shadow-md p-2" src={Member11} alt="" />
                                <h4 class="mt-3 fs-5 mb-1 fw-bold">ARYAMWIJUKA NIMLORD</h4>
                                <h6 class="fs-7">Running to Be: <span class="text-primary fw-bold">Finance Secretary</span></h6>
                                <button
                                    type="button"
                                    onClick={() => handleOthersVote('finance_secretary')}
                                    class={`btn ${others.finance_secretary === 1 ? 'btn-success' : 'btn-danger'} fw-bolder px-4 ms-2 fs-8`}>
                                    {others.finance_secretary === 0 ? 'Vote' : 'Voted'}
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div class="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                                <img class="rounded-pill shadow-md p-2" src={Member9} alt="" />
                                <h4 class="mt-3 fs-5 mb-1 fw-bold"> ABER ZITA LOURDES</h4>
                                <h6 class="fs-7">Running to Be: <span class="text-primary fw-bold">Public Secretary</span></h6>
                                <button
                                    type="button"
                                    onClick={() => handleOthersVote('public_secretary')}
                                    class={`btn ${others.public_secretary === 1 ? 'btn-success' : 'btn-danger'} fw-bolder px-4 ms-2 fs-8`}>
                                    {others.public_secretary === 0 ? 'Vote' : 'Voted'}
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div class="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                                <img class="rounded-pill shadow-md p-2" src={Member1} alt="" />
                                <h4 class="mt-3 fs-5 mb-1 fw-bold">KATITI MORIS MUGISHA</h4>
                                <h6 class="fs-7">Running to Be: <span class="text-primary fw-bold">General Secretary</span></h6>
                                <button
                                    type="button"
                                    onClick={() => handleOthersVote('general_secretary')}
                                    class={`btn ${others.general_secretary === 1 ? 'btn-success' : 'btn-danger'} fw-bolder px-4 ms-2 fs-8`}>
                                    {others.general_secretary === 0 ? 'Vote' : 'Voted'}
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div class="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                                <img class="rounded-pill shadow-md p-2" src={Member2} alt="" />
                                <h4 class="mt-3 fs-5 mb-1 fw-bold">LWANGA ELYIN MUTEBI</h4>
                                <h6 class="fs-7">Running to Be: <span class="text-primary fw-bold">Games and Entertainment</span></h6>
                                <button
                                    type="button"
                                    onClick={() => handleOthersVote('games_ent')}
                                    class={`btn ${others.games_ent === 1 ? 'btn-success' : 'btn-danger'} fw-bolder px-4 ms-2 fs-8`}>
                                    {others.games_ent === 0 ? 'Vote' : 'Voted'}
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div class="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                                <img class="rounded-pill shadow-md p-2" src={Member5} alt="" />
                                <h4 class="mt-3 fs-5 mb-1 fw-bold">NUHIIRE FRANK</h4>
                                <h6 class="fs-7">Running to Be: <span class="text-primary fw-bold">Projects Cordinator</span></h6>
                                <button
                                    type="button"
                                    onClick={() => handleOthersVote('project_cord')}
                                    class={`btn ${others.project_cord === 1 ? 'btn-success' : 'btn-danger'} fw-bolder px-4 ms-2 fs-8`}>
                                    {others.project_cord === 0 ? 'Vote' : 'Voted'}
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div class="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                                <img class="rounded-pill shadow-md p-2" src={Member7} alt="" />
                                <h4 class="mt-3 fs-5 mb-1 fw-bold">TAYEBWA SANDRA</h4>
                                <h6 class="fs-7">Running to Be: <span class="text-primary fw-bold">Deputy Projects Cordinator</span></h6>
                                <button
                                    type="button"
                                    onClick={() => handleOthersVote('deputy_project_cord')}
                                    class={`btn ${others.deputy_project_cord === 1 ? 'btn-success' : 'btn-danger'} fw-bolder px-4 ms-2 fs-8`}>
                                    {others.deputy_project_cord === 0 ? 'Vote' : 'Voted'}
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div class="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                                <img class="rounded-pill shadow-md p-2" src={Member10} alt="" />
                                <h4 class="mt-3 fs-5 mb-1 fw-bold">BUKULU PAUL</h4>
                                <h6 class="fs-7">Running to Be: <span class="text-primary fw-bold">REPRESENTATIVE OF PERSONS WITH SPECIAL NEEDS</span></h6>
                                <button
                                    type="button"
                                    onClick={() => handleOthersVote('srwsn')}
                                    class={`btn ${others.srwsn === 1 ? 'btn-success' : 'btn-danger'} fw-bolder px-4 ms-2 fs-8`}>
                                    {others.srwsn === 0 ? 'Vote' : 'Voted'}
                                </button>
                            </div>
                        </div>
                    </div>

                    <button className='btn btn-primary fw-bolder fs-8' type='submit'>
                        {mutation.isPending ? "Voting ..." : "Vote Now"}
                    </button>
                </div>

            </form>


            <Footer />
            <ManifestoModel />

        </div>
    )
}

export default Voting