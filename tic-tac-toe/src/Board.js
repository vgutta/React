import React, {Component} from 'react';
import Square from './Square';
import './Board.css';

class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            XisNext: true,
            winner: null
        };
    }
    clickHandler(i){
        const squares = this.state.squares.slice();
        if(squares[i] || this.calculateWinner(this.state.squares)){
            return;
        }
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
        const winner = this.calculateWinner(this.state.squares);
        let status;
        if(winner){
            status = "Winner: " + winner;
        }else {
            status = this.state.XisNext ? "Next Player: X": "Next Player: O";
        }

        return(
            <div>
                <h3 className="status">{status}</h3>
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

    calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
    }

}

export default Board;