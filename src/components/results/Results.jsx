import React from 'react'
import Header from '../layouts/Header';
import Member1 from '../../assets/images/testimonial/member-03.jpg';

function Results() {
  return (
    <div>
        <Header />
        <div class="container py-5 big-padding">
            <div class="row section-title">
                <h2 class="fs-5 text-center">The Master Brand Company Voting Result</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend arcu et sem elementum faucibus. Vestibulum faucibus eleifend dolor, id luctus libero. Suspendisse commodo, orci eu mattis mattis, ante ligula porta tortor, ut scelerisque massa risus a quam.</p>
            </div>
            <div class="row mb-5">
                <div class="col-md-6 mb-4">
                   <div class="row shado-md p-2 m-0 rounded shadow-md bg-white">
                       <div class="col-md-3">
                             <img class="rounded-pill max-130 p-2" src={Member1} alt="" />
                       </div>
                       <div class="col-md-9 align-self-center">
                           <h4 class="mt-3 fs-5 mb-1 fw-bold">James Anderson</h4>
                           <p class="fs-8 mb-2 fw-bold">Votes : 34,567</p>
                           <div class="progress">
                              <div class="progress-bar bg-danger" role="progressbar" aria-label="Example with label" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                          </div>
                       </div>
                   </div>
                </div>
                
                <div class="col-md-6 mb-4">
                   <div class="row shado-md p-2 m-0 rounded shadow-md bg-white">
                       <div class="col-md-3">
                             <img class="rounded-pill max-130 p-2" src={Member1} alt="" />
                       </div>
                       <div class="col-md-9 align-self-center">
                           <h4 class="mt-3 fs-5 mb-1 fw-bold">Arun Kumar</h4>
                           <p class="fs-8 mb-2 fw-bold">Votes : 34,567</p>
                           <div class="progress">
                              <div class="progress-bar bg-warning" role="progressbar" aria-label="Example with label" style={{width: "55%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">55%</div>
                          </div>
                       </div>
                   </div>
                </div>
                
                <div class="col-md-6 mb-4">
                   <div class="row shado-md p-2 m-0 rounded shadow-md bg-white">
                       <div class="col-md-3">
                             <img class="rounded-pill max-130 p-2" src={Member1} alt="" />
                       </div>
                       <div class="col-md-9 align-self-center">
                           <h4 class="mt-3 fs-5 mb-1 fw-bold">Pream Nath</h4>
                           <p class="fs-8 mb-2 fw-bold">Votes : 34,567</p>
                           <div class="progress">
                              <div class="progress-bar bg-primary" role="progressbar" aria-label="Example with label" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                          </div>
                       </div>
                   </div>
                </div>
                <div class="col-md-6 mb-4">
                   <div class="row shado-md p-2 m-0 rounded shadow-md bg-white">
                       <div class="col-md-3">
                             <img class="rounded-pill max-130 p-2" src={Member1} alt="" />
                       </div>
                       <div class="col-md-9 align-self-center">
                           <h4 class="mt-3 fs-5 mb-1 fw-bold">Reena Anath</h4>
                           <p class="fs-8 mb-2 fw-bold">Votes : 34,567</p>
                           <div class="progress">
                              <div class="progress-bar bg-success" role="progressbar" aria-label="Example with label" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                          </div>
                       </div>
                   </div>
                </div>
                
                 <div class="col-md-6 mb-4">
                   <div class="row shado-md p-2 m-0 rounded shadow-md bg-white">
                       <div class="col-md-3">
                             <img class="rounded-pill max-130 p-2" src={Member1} alt="" />
                       </div>
                       <div class="col-md-9 align-self-center">
                           <h4 class="mt-3 fs-5 mb-1 fw-bold">Allen Shory</h4>
                           <p class="fs-8 mb-2 fw-bold">Votes : 34,567</p>
                           <div class="progress">
                              <div class="progress-bar bg-success" role="progressbar" aria-label="Example with label" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                          </div>
                       </div>
                   </div>
                </div>
                
                 <div class="col-md-6 mb-4">
                   <div class="row shado-md p-2 m-0 rounded shadow-md bg-white">
                       <div class="col-md-3">
                             <img class="rounded-pill max-130 p-2" src={Member1} alt="" />
                       </div>
                       <div class="col-md-9 align-self-center">
                           <h4 class="mt-3 fs-5 mb-1 fw-bold">Aney Kumm</h4>
                           <p class="fs-8 mb-2 fw-bold">Votes : 34,567</p>
                           <div class="progress">
                              <div class="progress-bar bg-success" role="progressbar" aria-label="Example with label" style={{width: "25%"}} aria-valuenow="59" aria-valuemin="0" aria-valuemax="100">59%</div>
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