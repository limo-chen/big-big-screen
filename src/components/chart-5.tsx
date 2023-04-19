import React from "react";

export const Chart5 = () => {
  return (
    <div className="防控人员组成体系">
      <h2>防控人员组成体系</h2>
      <table>
        <thead>
          <tr>
            <th>年份</th>
            <th>隔离医护</th>
            <th>核酸护士</th>
            <th>配送人员</th>
            <th>社区防控</th>
            <th>志愿者</th>
            <th>餐食供应</th>
            <th>合计</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2020</td>
            <td>300</td>
            <td>167</td>
            <td>400</td>
            <td>500</td>
            <td>600</td>
            <td>300</td>
            <td>200</td>
          </tr>
          <tr>
            <td>2021</td>
            <td>200</td>
            <td>333</td>
            <td>244</td>
            <td>565</td>
            <td>632</td>
            <td>768</td>
            <td>908</td>
          </tr>
          <tr>
            <td>2022</td>
            <td>211</td>
            <td>322</td>
            <td>411</td>
            <td>511</td>
            <td>226</td>
            <td>337</td>
            <td>811</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
