import React, {Component} from 'react';
import Square from './Square';
import './Board.css';

class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            XisNext: true
        };
    }
    clickHandler(i){
        const squares = this.state.squares.slice();
        squares[i] = this.state.XisNext ? 'X': "O";
        this.setState({
            squares: squares,
            XisNext: !this.state.XisNext
        });
    }

    renderSquare(i){
        return (<Square 
                value={this.state.squares[i]}
                clickHandler={() => this.clickHandler(i)}
                />);
    }

    render(){
        const status = this.state.XisNext ? "Next Player: X": "Next Player: O";

        return(
            <div>
                
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }

}

export default Board;