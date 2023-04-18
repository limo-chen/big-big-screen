import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { baseEchartOptions } from "../shared/base-echart-options";
import { createEchartsOptions } from "../shared/create-echarts-options";
export const Chart2 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
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
          data: [
            "扶风区",
            "西安区",
            "中余区",
            "机场区",
            "新开区",
            "临安区",
            "古新区",
            "都城区",
            "蓝星新区",
          ],
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
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#2034f9",
                  },
                  {
                    offset: 1,
                    color: "#04a1ff",
                  },
                ]),
              },
            },
          },
          {
            name: "2012年",
            type: "bar",
            data: [2, 3, 4, 5, 6, 7, 8, 9, 10],
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
