import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { baseEchartOptions } from "../shared/base-echart-options";
import { createEchartsOptions } from "../shared/create-echarts-options";
export const Chart2 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { name: "城关区公安局", 2011: 2, 2012: 3 },
    { name: "七里河区公安局", 2011: 2, 2012: 3 },
    { name: "西固区公安局", 2011: 2, 2012: 3 },
    { name: "安宁区公安局", 2011: 2, 2012: 3 },
    { name: "红古区公安局", 2011: 2, 2012: 3 },
    { name: "永登县公安局", 2011: 2, 2012: 3 },
    { name: "皋兰县公安局", 2011: 2, 2012: 3 },
    { name: "榆中县公安局", 2011: 2, 2012: 3 },
    { name: "新区公安局", 2011: 2, 2012: 3 },
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: "城关区公安局", 2011: 2, 2012: Math.random() * 10 },
        { name: "七里河区公安局", 2011: 2, 2012: 3 },
        { name: "西固区公安局", 2011: 2, 2012: 3 },
        { name: "安宁区公安局", 2011: 2, 2012: 3 },
        { name: "红古区公安局", 2011: 2, 2012: 3 },
        { name: "永登县公安局", 2011: 2, 2012: 3 },
        { name: "皋兰县公安局", 2011: 2, 2012: 3 },
        { name: "榆中县公安局", 2011: 2, 2012: 3 },
        { name: "新区公安局", 2011: 2, 2012: 3 },
      ];
      x(newData);
    }, 1000);
  }, []);
  const x = (data) => {
    myChart.current.setOption(
      createEchartsOptions({
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          splitLine: { show: false },
          axisLabel: { show: false },
        },
        yAxis: {
          axisTick: { show: false },
          type: "category",
          data: data.map((i) => i.name),
          // data: [
          //   "扶风区",
          //   "西安区",
          //   "中余区",
          //   "机场区",
          //   "新开区",
          //   "临安区",
          //   "古新区",
          //   "都城区",
          //   "蓝星新区",
          // ],
          axisLabel: {
            formatter(val) {
              return val.replace("公安局", "\n公安局");
            },
          },
        },
        series: [
          {
            name: "2011年",
            type: "bar",
            data: data.map((i) => i[2011]),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#2034F9",
                  },
                  {
                    offset: 1,
                    color: "#04A1FF",
                  },
                ]),
              },
            },
          },
          {
            name: "2012年",
            type: "bar",
            data: data.map((i) => i[2012]),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#b92ae8",
                  },
                  {
                    offset: 1,
                    color: "#6773e7",
                  },
                ]),
              },
            },
          },
        ],
      })
    );
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  return (
    <div className="bordered 疫情实时动态">
      <h2>疫情实时动态</h2>

      <div ref={divRef} className="chart" />
      <div className="legend">
        <span className="first" />
        无症状患者
        <span className="second" /> 新增确诊患者
      </div>
    </div>
  );
};
