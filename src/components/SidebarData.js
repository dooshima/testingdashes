import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/Dashboard',
    icon: <IoIcons.IoIosSpeedometer />
  },
  // {
  //   title: 'Update Profile',
  //   path: '/profile',
  //   icon: <FaIcons.FaCartPlus />
  // },
 
  // {
  //   title: 'System Settings',
  //   path: '/Settings',
  //   icon: <AiIcons.AiFillHome />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,

  //   subNav: [
  //     {
  //       title: 'Users',
  //       path: '/overview/users',
  //       icon: <IoIcons.IoIosPaper />
  //     },
  //     {
  //       title: 'Revenue',
  //       path: '/overview/revenue',
  //       icon: <IoIcons.IoIosPaper />
  //     }
  //   ]
  // },
  {
    title: 'All Users',
    path: '/AllUserlog',
    icon: <IoIcons.IoIosPaper />,
  },
 
 
  {
    title: 'Patients Dashboard',
    path: '/Patientlog',
    icon: <IoIcons.IoIosPersonAdd />
  },
  {
    title: 'Provider Dashboard',
    path: '/Providerlog',
    icon: <IoIcons.IoIosPerson />
  },
  {
    title: 'Consultation Log',
    path: '/consultationlog',
    icon: <IoIcons.IoMdHelpCircle />
  },

  {
    title: 'Consultation Transaction',
    icon: <IoIcons.IoMdHelpCircle />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Current',
        path: '/consultationcurrent',
        icon: <IoIcons.IoMdArrowRoundDown />
      },
      {
        title: 'Past',
        path: '/consultationpage',
        icon: <IoIcons.IoMdArrowRoundBack />
      }
    ]
  },
  {
    title: 'Transaction',
    path: '/Transactionlog',
    icon: <IoIcons.IoIosSpeedometer />
  },
];
