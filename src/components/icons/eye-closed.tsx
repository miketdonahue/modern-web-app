import React from 'react';
import { Icon } from './typings';

const EyeClosed = ({
  color = 'currentColor',
  size = 24,
  ...restOfProps
}: Icon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      stroke={color}
      strokeWidth="0"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...restOfProps}
    >
      <path
        d="m2.7071 1.2929-1.4142 1.4142 4.0648 4.0648c-0.37866 0.31381-0.7534 0.65083-1.124 1.0092-0.82922 0.8019-1.5794 1.658-2.2398 2.5144-0.3985 0.5169-0.68143 0.9234-0.83634 1.1656l-0.3446 0.5388 0.3446 0.5388c0.15491 0.2422 0.43784 0.6488 0.83634 1.1656 0.6604 0.8565 1.4106 1.7126 2.2398 2.5145 2.4306 2.3505 5.0387 3.7811 7.7663 3.7811 1.7209 0 3.3943-0.5695 5.0056-1.5802l4.2873 4.2873 1.4142-1.4142-20-20zm12.838 15.666-1.5127-1.5127c-0.5955 0.3519-1.2902 0.5538-2.032 0.5538-2.2091 0-4-1.7908-4-4 0-0.7418 0.20193-1.4364 0.55382-2.032l-1.7741-1.7741c-0.38739 0.31241-0.77294 0.65479-1.1557 1.0249-0.7542 0.72936-1.4416 1.5138-2.0463 2.298-0.13059 0.1693-0.25126 0.3309-0.36158 0.4831 0.11032 0.1522 0.23099 0.3138 0.36158 0.4831 0.60464 0.7842 1.2921 1.5687 2.0463 2.2981 2.0934 2.0244 4.2709 3.2188 6.3759 3.2188 1.1682 0 2.3586-0.3678 3.5447-1.0411zm-5.4769-5.4769c-0.0442 0.1652-0.0678 0.3389-0.0678 0.518 0 1.1046 0.8955 2 2 2 0.1792 0 0.3528-0.0235 0.5181-0.0677l-2.4503-2.4503zm10.03 4.409-1.4143-1.4143c0.6342-0.641 1.2171-1.3174 1.7385-1.9936 0.1306-0.1693 0.2512-0.3309 0.3616-0.4831-0.1104-0.1522-0.231-0.3138-0.3616-0.4831-0.6047-0.7842-1.2921-1.5687-2.0463-2.298-2.0935-2.0245-4.2709-3.2188-6.376-3.2188-0.5223 0-1.049 0.07353-1.5779 0.21502l-1.5819-1.582c1.0324-0.41167 2.0869-0.63305 3.1598-0.63305 2.7276 0 5.3357 1.4306 7.7663 3.7812 0.8292 0.8019 1.5794 1.658 2.2398 2.5144 0.3985 0.5169 0.6814 0.9234 0.8364 1.1656l0.3446 0.5388-0.3446 0.5388c-0.155 0.2422-0.4379 0.6488-0.8364 1.1656-0.5712 0.7407-1.2095 1.4812-1.908 2.1866z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  );
};

export { EyeClosed };
