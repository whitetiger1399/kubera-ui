import { AreaGrapher, DataValue } from './base';

// const data1: DataValue[] = [
//   { date: 1000, value: 20 },
//   { date: 2000, value: 30 },
//   { date: 3000, value: 35 },
//   { date: 4000, value: 40 },
//   { date: 5000, value: 50 },
//   { date: 6000, value: 74 },
//   { date: 7000, value: 30 },
//   { date: 8000, value: 10 },
// ];
// const data2: DataValue[] = [
//   { date: 1000, value: 40 },
//   { date: 2000, value: 10 },
//   { date: 3000, value: 55 },
//   { date: 4000, value: 60 },
//   { date: 5000, value: 20 },
//   { date: 6000, value: 14 },
//   { date: 7000, value: 60 },
//   { date: 8000, value: 10 },
// ];

const data1: DataValue[] = [
  { date: 1610010460267, value: 20 },
  { date: 1610010461268, value: 30 },
  { date: 1610010462279, value: 35 },
  { date: 1610010463268, value: 40 },
  { date: 1610010464268, value: 50 },
  { date: 1610010465271, value: 74 },
  { date: 1610010466267, value: 30 },
  { date: 1610010467267, value: 10 },
];
const data2: DataValue[] = [
  { date: 1610010460267, value: 10 },
  { date: 1610010461268, value: 20 },
  { date: 1610010462279, value: 25 },
  { date: 1610010463268, value: 30 },
  { date: 1610010464268, value: 40 },
  { date: 1610010465271, value: 64 },
  { date: 1610010466267, value: 70 },
  { date: 1610010467267, value: 90 },
];
// const data1: DataValue[] = [
//   { date: 1610010460, value: 20 },
//   { date: 1610010461, value: 30 },
//   { date: 1610010462, value: 35 },
//   { date: 1610010463, value: 40 },
//   { date: 1610010464, value: 50 },
//   { date: 1610010465, value: 74 },
//   { date: 1610010466, value: 30 },
//   { date: 1610010467, value: 10 },
// ];
// const data2: DataValue[] = [
//   { date: 1610010460, value: 10 },
//   { date: 1610010461, value: 20 },
//   { date: 1610010462, value: 25 },
//   { date: 1610010463, value: 30 },
//   { date: 1610010464, value: 40 },
//   { date: 1610010465, value: 64 },
//   { date: 1610010466, value: 70 },
//   { date: 1610010467, value: 90 },
// ];
const seriestest1: Array<AreaGrapher> = [
  {
    metricName:
      'chaos-export-chaos-exportchaos-exportchaos-exportchaos-exportchaos-exportchaos-export',
    data: data1,
  },
];
const seriestest2: Array<AreaGrapher> = [{ metricName: 'heptio', data: data2 }];

export { seriestest1, seriestest2 };
