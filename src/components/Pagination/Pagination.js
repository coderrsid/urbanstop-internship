import React, { Component } from 'react';
import './Pagination.css';

export default class Pagination extends Component {
    render() {
        return (
            <div className="pagination-container">
                <div className="pagination">
                    <div>{"<"}</div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>></div>
                </div>
                <div className="pagination-buttons">
                    <button>Prev Page</button>
                    <button>Next Page</button>
                </div>

            </div>

        )
    }
}
