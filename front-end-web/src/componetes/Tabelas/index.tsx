import React from 'react';

import './styles.css';

const Content: React.FC = () => {
  return (<div className="box">
  <table className="table">
      <tr>
          <th>Placa</th>
          <th>Veiculo</th>
          <th>Situcao</th>
          <th>Opm</th>
          <th>Opçoes</th>
      </tr>
      <tr>
          <td>info1</td>
          <td>info2</td>
          <td>info3</td>
          <td>info4</td>
          <td></td>
      </tr>
      <tr>
          <td>info1</td>
          <td>info2</td>
          <td>info3</td>
          <td>info4</td>
          <td></td>
      </tr>
      <tr>
          <td>info1</td>
          <td>info2</td>
          <td>info3</td>
          <td>info4</td>
          <td></td>
      </tr>
  </table>
  </div>);
}

export default Content;