export const svgBase = (inner, classes = "lg") => {
  return `<svg
    class="svgIcon ${classes}"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
  > ${inner}
  </svg>`;
};

export const shareIcon = `<path
      d="M16,4.5556a2.3334,2.3334,0,1,1-2.3333-2.3334A2.3334,2.3334,0,0,1,16,4.5556Z"
    />
    <path
      d="M6.6667,10A2.3334,2.3334,0,1,1,4.3333,7.6667,2.3333,2.3333,0,0,1,6.6667,10Z"
    />
    <path
      d="M16,15.4444a2.3334,2.3334,0,1,1-2.3333-2.3333h0A2.3334,2.3334,0,0,1,16,15.4444Z"
    />
    <path d="M6.3473,11.175l5.3117,3.0955" />
    <path d="M11.6517,5.73,6.3473,8.825" />`;

export const collectionIcon = `<path
      d="M17.17,13.1542V6.781A1.5933,1.5933,0,0,0,16.3732,5.4L10.7967,2.2135a1.5931,1.5931,0,0,0-1.5934,0L3.6268,5.4A1.5933,1.5933,0,0,0,2.83,6.781v6.3732a1.5933,1.5933,0,0,0,.7967,1.3809l5.5765,3.1866a1.5936,1.5936,0,0,0,1.5934,0l5.5765-3.1866A1.5933,1.5933,0,0,0,17.17,13.1542Z"
    />
    <path d="M3.0447,5.9546,9.9989,9.9771l6.9554-4.0225" />
    <path d="M10,18V9.97" />`;

export const starIcon = `<path
        d="M10,2.8675l2.3182,4.695L17.5,8.322l-3.75,3.6523.8864,5.1582L10,14.6948,5.3636,17.1325l.8864-5.16L2.5,8.322l5.1818-.7577Z"
      />`;

export const messageIcon = `<path
        d="M17,12.7308a1.5557,1.5557,0,0,1-1.5557,1.5556H6.1114L3,17.3972V4.9529A1.5557,1.5557,0,0,1,4.5557,3.3972H15.4443A1.5557,1.5557,0,0,1,17,4.9529Z"
      />`;

export const chevronDownIcon = `<path d="M2,7l8,8,8-8" />`;
export const chevronLeftIcon = `<path d="M13,2,5,10l8,8"/>`;

export const crossIcon = `<path d="M16,4,4,16" /><path d="M4,4,16,16" />`;

export const plusIcon = `<path d="M10,3V17" /><path d="M3,10H17" />`;

export const minusIcon = `<path d="M3,10H17" />`;

export const userIcon = `<path
        d="M16.3927,17.4285V15.8032a3.25,3.25,0,0,0-3.25-3.25h-6.5a3.25,3.25,0,0,0-3.25,3.25h0v1.6253"
      />
      <path d="M13.1429,6.0529a3.2493,3.2493,0,1,1,0-.0009Z" />`;

export const activityIcon = `<path d="M17.7778,10H14.6667l-2.3334,7L7.6667,3,5.3333,10H2.2222" />`;

export const usersIcon = `<path
        d="M13.4091,16.1364V14.7727a2.7273,2.7273,0,0,0-2.7273-2.7272H5.2273A2.7272,2.7272,0,0,0,2.5,14.7727v1.3637"
      />
      <path
        d="M10.6818,6.5909A2.7273,2.7273,0,1,1,7.9545,3.8636,2.7273,2.7273,0,0,1,10.6818,6.5909Z"
      />
      <path d="M17.5,16.1364V14.7727a2.7273,2.7273,0,0,0-2.0455-2.6363" />
      <path d="M12.7273,3.9545a2.7273,2.7273,0,0,1,0,5.2819" />`;

export const linkIcon = ` <path
        d="M8.6073,10.6963a3.4824,3.4824,0,0,0,5.2512.3717L15.947,8.9831a3.4822,3.4822,0,1,0-4.8584-4.99q-.0333.0324-.0657.0657L9.8263,5.25"
      />
      <path
        d="M11.3936,9.3074a3.4819,3.4819,0,0,0-5.2511-.3717L4.053,11.0169a3.4822,3.4822,0,1,0,4.8584,4.99q.0333-.0324.0657-.0657l1.19-1.1911"
      />`;

export const checkboxIcon = `<path d="M7.2778,9.2222l2.3333,2.3334,7.7778-7.7778" />
      <path
        d="M16.6111,10v5.4444A1.5555,1.5555,0,0,1,15.0556,17H4.1667a1.5556,1.5556,0,0,1-1.5556-1.5556V4.5556A1.5556,1.5556,0,0,1,4.1667,3h8.5555"
      />`;

export const fileIcon = `<path
        d="M11.5,2.5h-6A1.5,1.5,0,0,0,4,4V16a1.5,1.5,0,0,0,1.5,1.5h9A1.5,1.5,0,0,0,16,16h0V7Z"
      />
      <path d="M11.5,2.5V7H16" />
      <path d="M13,10.75H7" />
      <path d="M13,13.75H7" />
      <path d="M8.5,7.75H7" />`;

export const clockIcon = ` <path d="M17,10a7,7,0,1,1-7-7A7,7,0,0,1,17,10Z" />
      <path d="M10.35,7.5505v4.2l2.8,1.4" />`;

export const editIcon = `<path d="M10,17h7.3592" />
      <path
        d="M13.68,3.508a1.7346,1.7346,0,0,1,2.4531,2.4531L5.9115,16.1823,2.6408,17l.8176-3.2708Z"
      />`;

export const videoIcon = `<polygon points="17.5 6.591 12.727 10 17.5 13.409 17.5 6.591" />
      <rect x="2.5" y="5.2273" width="10.2273" height="9.5455" rx="1.3636" />`;

export const homeIcon = `<path d="M3.25,7.75,10,2.5l6.75,5.25V16a1.5,1.5,0,0,1-1.5,1.5H4.75A1.5,1.5,0,0,1,3.25,16Z"/><path d="M7.75,17.5V10h4.5v7.5"/>`;

export const settingsIcon = `<path d="M12.0455,10A2.0455,2.0455,0,1,1,10,7.9545,2.0455,2.0455,0,0,1,12.0455,10Z"/>
<path d="M15.0455,12.0455a1.125,1.125,0,0,0,.225,1.2409l.0409.0409a1.3644,1.3644,0,1,1-1.93,1.93l-.0409-.0409a1.1364,1.1364,0,0,0-1.9227.8046v.1159a1.3637,1.3637,0,0,1-2.7273,0h0V16.075a1.1806,1.1806,0,0,0-1.9773-.8045l-.0409.0409a1.3644,1.3644,0,0,1-1.9295-1.93l.0409-.0409A1.1364,1.1364,0,0,0,3.98,11.4182H3.8636a1.3637,1.3637,0,0,1,0-2.7273H3.925a1.1792,1.1792,0,0,0,.8023-1.9773l-.0409-.0409A1.3652,1.3652,0,1,1,6.6182,4.7432l.0409.0409A1.125,1.125,0,0,0,7.9,5.0091h.0545a1.125,1.125,0,0,0,.6819-1.03V3.8636a1.3636,1.3636,0,1,1,2.7272,0V3.925a1.1364,1.1364,0,0,0,1.9228.8045l.0409-.0409a1.3644,1.3644,0,1,1,1.93,1.93l-.0409.0409A1.1249,1.1249,0,0,0,14.9886,7.9v.0545a1.1252,1.1252,0,0,0,1.0319.6819h.1159a1.3636,1.3636,0,1,1,0,2.7272H16.075A1.1249,1.1249,0,0,0,15.0455,12.0455Z"/>`;
