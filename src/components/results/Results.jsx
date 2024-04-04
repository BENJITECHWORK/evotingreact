import React from 'react'
import Header from '../layouts/Header';
import { useQuery } from '@tanstack/react-query';
import { getTotalVotes } from '../../apis/apifunctions/voteApi';
import Member1 from '../../assets/images/testimonial/member-03.jpg';

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
                </div>
                <div class="row mb-5">
                    <div class="col-md-6 mb-4">
                        <div class="row shado-md p-2 m-0 rounded shadow-md bg-white">
                            <div class="col-md-3">
                                <img class="rounded-pill max-130 p-2" src={Member1} alt="" />
                            </div>
                            {
                                JSON.stringify(data)
                            }
                            <div class="col-md-9 align-self-center">
                                <h4 class="mt-3 fs-5 mb-1 fw-bold">James Anderson</h4>
                                <p class="fs-8 mb-2 fw-bold">Votes : 34,567</p>
                                <div class="progress">
                                    <div class="progress-bar bg-danger" role="progressbar" aria-label="Example with label" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
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