import apple from '../icons/apple.png';
import footprint from '../icons/footprint.png';
import dumbell from '../icons/dumbell.png';
import moon from '../icons/moon.png';
import applesquare from '../icons/applesquare.png';
import gymsquare from '../icons/gymsquare.png';
import heartsquare from '../icons/heartsquare.png';

export const dailyStats = [
  {
    img: apple,
    type: 'Calories',
    stat: '2814',
    status: 'Daily Average',
  },
  {
    img: footprint,
    type: 'Steps',
    stat: '7234',
    status: 'Daily Average',
  },
  {
    img: dumbell,
    type: 'Workouts',
    stat: '1h 23min',
    status: 'Active',
  },
  {
    img: moon,
    type: 'Sleeping Analysis',
    stat: '7h 35min',
    status: 'In Bad Average',
  },
];

export const challenge = [
  {
    title: 'Early Morning Smoothie',
    desc: 'Start you day with energy. For breakfast, prepare a powerful and healthy smoothie rich in potassium and vitamin C. It will boost your metabolism.',
    recipe: [
      '130g banana',
      '1 whole kiwi',
      '250ml orange juice',
      '3 spoons of yogurt',
    ],
    cal: '420 cal',
  },
];

export const dailytips = [
  {
    title: 'Mindfulness',
    desc: 'Do one-hour yoga daily for improving your body balance, flexibility and strength.',
  },
  {
    title: 'Get more of your day',
    desc: 'Wake up 40 min before the usual and go for a morning walk in the park.',
  },
  {
    title: 'Early bedtime',
    desc: 'Go to sleep more of the same hour every night.',
  },
];

export const recommended = [
  {
    img: gymsquare,
    title: 'High Intensity Training',
    desc: 'Running in the nature',
  },
  {
    img: applesquare,
    title: 'Colorful evening meal',
    desc: 'Vegetables for better',
  },
  {
    img: heartsquare,
    title: 'Meditate for 5 min',
    desc: 'Train your mind',
  },
  {
    img: applesquare,
    title: 'Skin hydration',
    desc: 'Drink spinach smoothie',
  },
];
