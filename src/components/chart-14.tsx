import React from "react";

export const Chart14 = () => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>配送地址</th>
          <th>需求物资描述</th>
          <th>供单批数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={4}>鹿城医院</td>
          <td>医用口罩</td>
          <td>11100</td>
          <td rowSpan={4}>80</td>
        </tr>
        <tr>
          <td>洗手液</td>
          <td>2000</td>
        </tr>
        <tr>
          <td>急救箱</td>
          <td>2022</td>
        </tr>
        <tr>
          <td>防护服</td>
          <td>2330</td>
        </tr>
        <tr>
          <td rowSpan={2}>柳家洼医院</td>
          <td>洗手液</td>
          <td>2211</td>
          <td rowSpan={2}>414</td>
        </tr>
        <tr>
          <td>氧气罐</td>
          <td>221</td>
        </tr>
        <tr>
          <td rowSpan={3}>街道分发处</td>
          <td>防毒面罩</td>
          <td>140</td>
          <td rowSpan={3}>618</td>
        </tr>
        <tr>
          <td>口罩</td>
          <td>1122</td>
        </tr>
        <tr>
          <td>消毒液</td>
          <td>1115</td>
        </tr>
        <tr>
          <td rowSpan={2}>三康医院</td>
          <td>急救医药箱</td>
          <td>312</td>
          <td rowSpan={2}>1102</td>
        </tr>
        <tr>
          <td>防护服</td>
          <td>8110</td>
        </tr>
      </tbody>
    </table>
  );
};
