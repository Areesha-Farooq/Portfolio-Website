// Dummy skill levels — tweak the `level` values (0-100) to match your real proficiency.
import {
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiGit,
} from 'react-icons/si';

export const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'C++', level: 80, icon: SiCplusplus },
      { name: 'JavaScript', level: 70, icon: SiJavascript },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', level: 90, icon: SiHtml5 },
      { name: 'CSS3', level: 85, icon: SiCss3 },
      { name: 'React (Learning)', level: 55, icon: SiReact },
    ],
  },
  {
    title: 'Backend & Tools',
    skills: [
      { name: 'Node.js', level: 50, icon: SiNodedotjs },
      { name: 'Express.js', level: 45, icon: SiExpress },
      { name: 'MongoDB', level: 50, icon: SiMongodb },
      { name: 'Git & GitHub', level: 65, icon: SiGit },
    ],
  },
];
