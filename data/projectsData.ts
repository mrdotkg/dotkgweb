const baseURL = 'kgrv.online'

interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'ButterOps',
    description: `A Software Community: Open and friendly community for first-timer and veteran developers.`,
    imgSrc: '',
    href: `https://butterops.${baseURL}`,
  },
  {
    title: '40FY Gaming',
    description: `A Gaming Community: Video Gaming Community for Mobile, iPad, PC and Play Station gamers.`,
    imgSrc: '',
    href: `https://40fy.${baseURL}`,
  }
]

export default projectsData
