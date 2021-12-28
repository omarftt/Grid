

class Board extends React.Component {
    constructor(){
      this.state = { ngrids: 3};
    }
  
  
    createTable = () => {
      let table = [];
      // Outer loop to create parent
      for (let i = 0; i < 3; i++) {
        let children = [];
        //Inner loop to create children
        for (let j = 0; j < 3; j++) {
          children.push(
            <td> </td>
          );
        }
        table.push(
          <tr key={i}>{children}
          </tr>
        );
        // console.log(tableCellsData);
      }
      return table;
    };
    
    render() {
      return(
        <div>
          <table>
            <tbody>
              {this.createTable()}
            </tbody>
          </table>
        </div>
      );
  
    }
  }
  
  function App() {
    return (
      <div className="App">
        <div  className="board">
          <Board />
        </div>
      </div>
    );
  }
  
  export default App;
  