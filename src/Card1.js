// JavaScript source code
import React from 'react';

function Card() {
    return (
        <div class="row">
            <div class="col-sm-4">
                <div class="card blue-card">
                    <div class="card-body">
                        <h5 class="card-title">Card 01</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card red-card">
                    <div class="card-body">
                        <h5 class="card-title">Card 02</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card green-card">
                    <div class="card-body">
                        <h5 class="card-title">Card 03</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
