import cvData from '../../data/cv.json'

export const getCVData = () => {
  return cvData
}

export const getPersonalInfo = () => {
  return cvData.personalInfo
}

export const getSkills = () => {
  return cvData.skills
}

export const getTechnologies = () => {
  return cvData.technologies
}

export const getExperiences = () => {
  return cvData.experiences
}

export const getEducation = () => {
  return cvData.education
}

export const getInterests = () => {
  return cvData.interests
}

export const getLanguages = () => {
  return cvData.languages
}
