type Education = {
  major: string
  institution: string
  startDate: string
  endDate: string
}
type Experience = Education & {
  desc: string
}
type Data = {
  header: {
    name: string
    role: string
    desc: string
  }
  skill: string[]
  education: Education[]
  experience: Experience[]
  contact: string[]
}

const data: Data = {
  header: {
    name: "Estelle Darcy",
    role: "Social Media Manager",
    desc: "I am an experienced social media manager seeking a full-time position in the field of social media and marketing communications, where I can apply my knowledge and skills for continuous improvement.",
  },
  skill: [
    "Photo editing and digital illustration software",
    "Social media suites & management software",
    "Tracking & analytics tools",
    "Word processors",
  ],
  education: [
    {
      major: "Bachelor of arts, major in communication",
      institution: "University of dundee",
      startDate: "2019",
      endDate: "2022",
    },
    {
      major: "Course in Digital Marketing",
      institution: "University of Mac Lane and Knights",
      startDate: "2022",
      endDate: "2024",
    },
  ],
  experience: [
    {
      major: "Social Media Producer",
      institution: "Pixelpoint Hive",
      startDate: "2024",
      endDate: "2026",
      desc: "Managed social media accounts. Created social media graphics for daily posting. Increased social media following and clicks by an average of 200% yearly.",
    },
    {
      major: "Social Media Producer",
      institution: "Alise",
      startDate: "2024",
      endDate: "2026",
      desc: "Organizes all social media posts for the editorial department Approves all content to be posted on social media Engages with readers and clients online.",
    },
  ],
  contact: [
    "hello@reallygreatsite.com",
    "www.reallygreatsite.com",
    "@reallygreatsite",
    "123 Anywhere St., Any City",
  ],
}
const emptyData: Data = {
  header: {
    name: "",
    role: "",
    desc: "",
  },
  skill: ["", "", "", ""],
  education: [
    {
      major: "",
      institution: "",
      startDate: "",
      endDate: "",
    },
    {
      major: "",
      institution: "",
      startDate: "",
      endDate: "",
    },
  ],
  experience: [
    {
      major: "",
      institution: "",
      startDate: "",
      endDate: "",
      desc: "",
    },
    {
      major: "",
      institution: "",
      startDate: "",
      endDate: "",
      desc: "",
    },
  ],
  contact: ["", "", "", ""],
}
export { data, emptyData }
