import React, { useState } from 'react';
import Header from '../layouts/Header';
import Member1 from '../../assets/images/testimonial/member-03.jpg';
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
    console.log('userDetails', userDetails)

    const handleOthersVote = (position, candidateId) => {
        setOthers(prevOthers => ({ ...prevOthers, [position]: candidateId }));
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
                        <h2 class="fs-4">Organization - ChairPerson</h2>
                        <p>Lorem ipsum dolor </p>
                    </div>
                    <div class="row">
                        <div className="col-lg-4 col-md-6">
                            <div class="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                                <img class="rounded-pill shadow-md p-2" src={Member1} alt="" />
                                <h4 class="mt-3 fs-5 mb-1 fw-bold">Arun Kumar</h4>
                                <h6 class="fs-7">Runnung to Be: <span class="text-primary fw-bold">President</span></h6>
                                <p class="text-dark mt-3 mb-3 fs-8">Aliquam utrum nibh rutrum nibh vitae tortor dapibus egestas. Cras condimentum dapibus tellus vel semper. Quisque vel dui molestie est auctor utrum nibh porttitor.</p>
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary fw-bolder fs-8">View Manifesto</button>
                                <button
                                    type="button"
                                    class="btn btn-danger fw-bolder px-4 ms-2 fs-8"
                                    onClick={() => setChairperson(1)}
                                >Vote</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div class="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                                <img class="rounded-pill shadow-md p-2" src={Member1} alt="" />
                                <h4 class="mt-3 fs-5 mb-1 fw-bold">Arun Kumar</h4>
                                <h6 class="fs-7">Runnung to Be: <span class="text-primary fw-bold">President</span></h6>
                                <p class="text-dark mt-3 mb-3 fs-8">Aliquam utrum nibh rutrum nibh vitae tortor dapibus egestas. Cras condimentum dapibus tellus vel semper. Quisque vel dui molestie est auctor utrum nibh porttitor.</p>
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary fw-bolder fs-8">View Manifesto</button>
                                <button
                                    type="button"
                                    class="btn btn-danger fw-bolder px-4 ms-2 fs-8"
                                    onClick={() => setChairperson(2)}
                                >Vote</button>
                            </div>
                        </div>
                    </div>

                    {/* Vice Chairperson */}
                    <div class="row section-title">
                        <h2 class="fs-4">Vice ChairPerson</h2>
                        <p>Lorem ipsum dolor sit amet, </p>
                    </div>
                    <div class="row">
                        <div className="col-lg-4 col-md-6">
                            <div class="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                                <img class="rounded-pill shadow-md p-2" src={Member1} alt="" />
                                <h4 class="mt-3 fs-5 mb-1 fw-bold">Arun Kumar</h4>
                                <h6 class="fs-7">Runnung to Be: <span class="text-primary fw-bold">President</span></h6>
                                <p class="text-dark mt-3 mb-3 fs-8">Aliquam utrum nibh rutrum nibh vitae tortor dapibus egestas. Cras condimentum dapibus tellus vel semper. Quisque vel dui molestie est auctor utrum nibh porttitor.</p>
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary fw-bolder fs-8">View Manifesto</button>
                                <button
                                    type="button"
                                    class="btn btn-danger fw-bolder px-4 ms-2 fs-8"
                                    onClick={() => setViceChairperson(1)}
                                >Vote</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div class="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                                <img class="rounded-pill shadow-md p-2" src={Member1} alt="" />
                                <h4 class="mt-3 fs-5 mb-1 fw-bold">Arun Kumar</h4>
                                <h6 class="fs-7">Runnung to Be: <span class="text-primary fw-bold">President</span></h6>
                                <p class="text-dark mt-3 mb-3 fs-8">Aliquam utrum nibh rutrum nibh vitae tortor dapibus egestas. Cras condimentum dapibus tellus vel semper. Quisque vel dui molestie est auctor utrum nibh porttitor.</p>
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary fw-bolder fs-8">View Manifesto</button>
                                <button
                                    type="button"
                                    class="btn btn-danger fw-bolder px-4 ms-2 fs-8"
                                    onClick={() => setViceChairperson(2)}
                                >Vote</button>
                            </div>
                        </div>
                    </div>

                    {/* Others */}
                    <div class="row section-title">
                        <h2 class="fs-4">Others</h2>
                        <p>Lorem ipsum dolor sit amet, celeifend dolor, id luctus libero. Suspendisse commodo, orci eu mattis mattis, ante ligula porta tortor, ut scelerisque massa risus a quam.</p>
                    </div>
                    <div class="row">
                        <div className="col-lg-4 col-md-6">
                            <div class="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                                <img class="rounded-pill shadow-md p-2" src={Member1} alt="" />
                                <h4 class="mt-3 fs-5 mb-1 fw-bold">Arun Kumar</h4>
                                <h6 class="fs-7">Runnung to Be: <span class="text-primary fw-bold">President</span></h6>
                                <p class="text-dark mt-3 mb-3 fs-8">Aliquam utrum nibh rutrum nibh vitae tortor dapibus egestas. Cras condimentum dapibus tellus vel semper. Quisque vel dui molestie est auctor utrum nibh porttitor.</p>
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary fw-bolder fs-8">View Manifesto</button>
                                <button class="btn btn-danger fw-bolder px-4 ms-2 fs-8">Vote</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div class="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                                <img class="rounded-pill shadow-md p-2" src={Member1} alt="" />
                                <h4 class="mt-3 fs-5 mb-1 fw-bold">Arun Kumar</h4>
                                <h6 class="fs-7">Runnung to Be: <span class="text-primary fw-bold">President</span></h6>
                                <p class="text-dark mt-3 mb-3 fs-8">Aliquam utrum nibh rutrum nibh vitae tortor dapibus egestas. Cras condimentum dapibus tellus vel semper. Quisque vel dui molestie est auctor utrum nibh porttitor.</p>
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary fw-bolder fs-8">View Manifesto</button>
                                <button class="btn btn-danger fw-bolder px-4 ms-2 fs-8">Vote</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div class="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                                <img class="rounded-pill shadow-md p-2" src={Member1} alt="" />
                                <h4 class="mt-3 fs-5 mb-1 fw-bold">Arun Kumar</h4>
                                <h6 class="fs-7">Runnung to Be: <span class="text-primary fw-bold">President</span></h6>
                                <p class="text-dark mt-3 mb-3 fs-8">Aliquam utrum nibh rutrum nibh vitae tortor dapibus egestas. Cras condimentum dapibus tellus vel semper. Quisque vel dui molestie est auctor utrum nibh porttitor.</p>
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary fw-bolder fs-8">View Manifesto</button>
                                <button class="btn btn-danger fw-bolder px-4 ms-2 fs-8">Vote</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div class="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                                <img class="rounded-pill shadow-md p-2" src={Member1} alt="" />
                                <h4 class="mt-3 fs-5 mb-1 fw-bold">Arun Kumar</h4>
                                <h6 class="fs-7">Runnung to Be: <span class="text-primary fw-bold">President</span></h6>
                                <p class="text-dark mt-3 mb-3 fs-8">Aliquam utrum nibh rutrum nibh vitae tortor dapibus egestas. Cras condimentum dapibus tellus vel semper. Quisque vel dui molestie est auctor utrum nibh porttitor.</p>
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary fw-bolder fs-8">View Manifesto</button>
                                <button class="btn btn-danger fw-bolder px-4 ms-2 fs-8">Vote</button>
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