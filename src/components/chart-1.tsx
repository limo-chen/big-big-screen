import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const px = (n) => (n / 2420) * (window as any).pageWidth;
export const Chart1 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption({
      textStyle: {
        fontSize: px(12),
        color: "#79839E",
      },
      title: { show: false },
      legend: { show: false },
      xAxis: {
        data: [
          "扶风区",
          "西安区",
          "中余区",
          "机场区",
          "新开区",
          "临安区",
          "古溪区",
          "都城区",
          "蓝星新区",
        ],
        axisTick: { show: false },
        axisLine: {
          lineStyle: { color: "#083B70" },
        },
        axisLabel: {
          fontSize: px(12),
          formatter(val) {
            if (val.length > 2) {
              const array = val.split("");
              array.splice(2, 0, "\n");
              return array.join("");
            } else {
              return val;
            } // 地区名字换行判断
          },
        },
      },
      grid: {
        x: px(40),
        y: px(40),
        x2: px(40),
        y2: px(40),
      },
      yAxis: {
        splitLine: { show: false },
        axisLine: {
          show: true,
          lineStyle: { color: "#083B70" },
        },
        axisLabel: {
          fontSize: px(12),
        },
      },
      series: [
        {
          type: "bar",
          data: [10, 20, 36, 41, 15, 26, 37, 18, 29],
        },
      ],
    });
  }, []);

  return (
    <div className="bordered 确诊人数统计">
      <h2>地区确诊人数统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
