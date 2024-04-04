import React from 'react'
import Header from '../layouts/Header';
import { useQuery } from '@tanstack/react-query';
import { getTotalVotes } from '../../apis/apifunctions/voteApi';
import Member1 from '../../assets/images/testimonial/member-03.jpg';
import Member13 from '../../assets/members/member-13.jpeg';
import Member3 from '../../assets/members/member-03.jpeg';
import Member12 from '../../assets/members/member-12.jpeg';
import Member6 from '../../assets/members/member-06.jpeg';

function Results() {
    const { isLoading, error, data } = useQuery({
        queryKey: ['votingData'],
        queryFn: getTotalVotes
    })

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <Header />
            <div class="container py-5 big-padding">
                <div class="row section-title">
                    <h2 class="fs-5 text-center">Mufasa Result Sheet</h2>
                    <p class="fs-6 text-center">TOTAL VOTERS:  {data.total_votes}</p>
                </div>
                <div class="row mb-5">
                    <div class="col-md-6 mb-4">
                        <div class="row shado-md p-2 m-0 rounded shadow-md bg-white">
                            <div class="col-md-3">
                                <img class="rounded-pill max-130 p-2" src={Member13} alt="" />
                            </div>
                            <div class="col-md-9 align-self-center">
                                <h4 class="mt-3 fs-5 mb-1 fw-bold">SYAKENGWA BRIAN(Chairperson)</h4>
                                <p class="fs-8 mb-2 fw-bold">Votes : {data?.results.chairpersons?.SB}</p>
                                <div class="progress">
                                    <div class="progress-bar bg-success" role="progressbar" aria-label="Example with label" style={{ width: `${((data?.results.chairpersons?.SB / data.total_votes) * 100).toFixed(2)}%` }}
                                        aria-valuenow={`${((data?.results.chairpersons?.SB / data.total_votes) * 100).toFixed(2)}%`} aria-valuemin="0" aria-valuemax="100">
                                        {((data?.results.chairpersons?.SB / data.total_votes) * 100).toFixed(2)}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mb-4">
                        <div class="row shado-md p-2 m-0 rounded shadow-md bg-white">
                            <div class="col-md-3">
                                <img class="rounded-pill max-130 p-2" src={Member3} alt="" />
                            </div>
                            <div class="col-md-9 align-self-center">
                                <h4 class="mt-3 fs-5 mb-1 fw-bold">NUWAMANYA AIVAN(Chairperson)</h4>
                                <p class="fs-8 mb-2 fw-bold">Votes : {data?.results.chairpersons?.NW}</p>
                                <div class="progress">
                                    <div class="progress-bar bg-success" role="progressbar" aria-label="Example with label" style={{ width: `${((data?.results.chairpersons?.SB / data.total_votes) * 100).toFixed(2)}%` }}
                                        aria-valuenow={`${((data?.results.chairpersons?.NW/ data.total_votes) * 100).toFixed(2)}%`} aria-valuemin="0" aria-valuemax="100">
                                        {((data?.results.chairpersons?.NW / data?.total_votes) * 100).toFixed(2)}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mb-4">
                        <div class="row shado-md p-2 m-0 rounded shadow-md bg-white">
                            <div class="col-md-3">
                                <img class="rounded-pill max-130 p-2" src={Member12} alt="" />
                            </div>
                            <div class="col-md-9 align-self-center">
                                <h4 class="mt-3 fs-5 mb-1 fw-bold">MUGEMA BRIAN(Vice Chairperson)</h4>
                                <p class="fs-8 mb-2 fw-bold">Votes : {data?.results.vice_chairperson?.MB}</p>
                                <div class="progress">
                                    <div class="progress-bar bg-success" role="progressbar" aria-label="Example with label" style={{ width: `${((data?.results.vice_chairperson?.MB / data.total_votes) * 100).toFixed(2)}%` }}
                                        aria-valuenow={`${((data?.results.vice_chairperson?.MB/ data.total_votes) * 100).toFixed(2)}%`} aria-valuemin="0" aria-valuemax="100">
                                        {((data?.results.vice_chairperson?.MB / data?.total_votes) * 100).toFixed(2)}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mb-4">
                        <div class="row shado-md p-2 m-0 rounded shadow-md bg-white">
                            <div class="col-md-3">
                                <img class="rounded-pill max-130 p-2" src={Member6} alt="" />
                            </div>
                            <div class="col-md-9 align-self-center">
                                <h4 class="mt-3 fs-5 mb-1 fw-bold">MAZIMA WINNIE(Vice Chairperson)</h4>
                                <p class="fs-8 mb-2 fw-bold">Votes : {data?.results.vice_chairperson?.MW}</p>
                                <div class="progress">
                                    <div class="progress-bar bg-success" role="progressbar" aria-label="Example with label" style={{ width: `${((data?.results.vice_chairperson?.NW / data.total_votes) * 100).toFixed(2)}%` }}
                                        aria-valuenow={`${((data?.results.vice_chairperson?.NW/ data.total_votes) * 100).toFixed(2)}%`} aria-valuemin="0" aria-valuemax="100">
                                        {((data?.results.vice_chairperson?.MW / data?.total_votes) * 100).toFixed(2)}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results;