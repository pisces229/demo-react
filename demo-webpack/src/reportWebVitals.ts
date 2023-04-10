import { ReportCallback } from 'web-vitals';

const reportWebVitals = (onReportCallback?: ReportCallback) => {
  if (onReportCallback && onReportCallback instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onReportCallback);
      getFID(onReportCallback);
      getFCP(onReportCallback);
      getLCP(onReportCallback);
      getTTFB(onReportCallback);
    });
  }
};

export default reportWebVitals;
