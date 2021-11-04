import avatar from '../assets/images/image-jeremy.png';
import iconWork from '../assets/images/icon-work.svg';

export const user = {
  name: 'Jeremy Robson',
  avatar: avatar,
  schedule: {
    work: {
      name: 'work',
      img: iconWork,
      color: '#ff8c66',
      period: {
        daily: {
          hours: 5,
          lastPeriod: 7,
        },
        weekly: {
          hours: 32,
          lastPeriod: 36,
        },
        monthly: {
          hours: 103,
          lastPeriod: 128,
        },
      },
    },
    play: {
      name: 'play',
      img: 'src/assets/images/icon-play.svg',
      color: '#56c2e6',
      period: {
        daily: {
          hours: 1,
          lastPeriod: 2,
        },
        weekly: {
          hours: 10,
          lastPeriod: 8,
        },
        monthly: {
          hours: 23,
          lastPeriod: 29,
        },
      },
    },
    study: {
      name: 'study',
      img: 'src/assets/images/icon-study.svg',
      color: '#ff5c7c',
      period: {
        daily: {
          hours: 0,
          lastPeriod: 1,
        },
        weekly: {
          hours: 4,
          lastPeriod: 7,
        },
        monthly: {
          hours: 13,
          lastPeriod: 19,
        },
      },
    },
    exercise: {
      name: 'exercise',
      img: 'src/assets/images/icon-exercise.svg',
      color: '#4acf81',
      period: {
        daily: {
          hours: 1,
          lastPeriod: 1,
        },
        weekly: {
          hours: 4,
          lastPeriod: 5,
        },
        monthly: {
          hours: 11,
          lastPeriod: 18,
        },
      },
    },
    social: {
      name: 'social',
      img: 'src/assets/images/icon-social.svg',
      color: '#7536d3',
      period: {
        daily: {
          hours: 1,
          lastPeriod: 3,
        },
        weekly: {
          hours: 5,
          lastPeriod: 10,
        },
        monthly: {
          hours: 21,
          lastPeriod: 23,
        },
      },
    },
    selfCare: {
      name: 'self care',
      img: 'src/assets/images/icon-self-care.svg',
      color: '#f1c65b',
      period: {
        daily: {
          hours: 0,
          lastPeriod: 1,
        },
        weekly: {
          hours: 2,
          lastPeriod: 2,
        },
        monthly: {
          hours: 7,
          lastPeriod: 11,
        },
      },
    },
  },
};
