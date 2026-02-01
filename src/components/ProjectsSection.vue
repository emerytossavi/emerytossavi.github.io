<template>
  <section id="projects" class="py-20 bg-[#0d1117]">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 font-['Fira_Code']">
        <span class="text-cyan-400">&lt;</span>
        Projets
        <span class="text-cyan-400">/&gt;</span>
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div 
          v-for="(experience, index) in experiences" 
          :key="index"
          class="bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10"
        >
          <div class="p-6">
            <div class="flex items-start justify-between mb-4">
              <h3 class="text-xl font-bold text-gray-100 font-['Fira_Code']">{{ experience.title }}</h3>
              <i class="fas fa-folder-open text-cyan-400 text-xl"></i>
            </div>

            <div v-if="experience.company" class="flex items-center text-sm text-gray-400 mb-2">
              <i class="fas fa-building mr-2"></i>
              <span>{{ experience.company }}</span>
            </div>

            <div class="flex items-center text-sm text-gray-400 mb-4">
              <i class="fas fa-calendar mr-2"></i>
              <span>{{ experience.period }}</span>
            </div>

            <p class="text-gray-300 mb-6 text-sm leading-relaxed">
              {{ experience.description }}
            </p>

            <div v-if="experience.technologies && experience.technologies.length > 0" class="mb-6">
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in experience.technologies" 
                  :key="tech"
                  :class="getTechClass(tech)"
                  class="px-3 py-1 rounded text-xs font-['Fira_Code']"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="flex gap-3">
              <button class="flex-1 px-4 py-2 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400 hover:text-[#1a1a1a] transition-all duration-300 text-sm font-['Fira_Code'] flex items-center justify-center">
                <i class="fab fa-github mr-2"></i>
                Code
              </button>
              <button class="flex-1 px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition-all duration-300 text-sm font-['Fira_Code'] flex items-center justify-center">
                <i class="fas fa-external-link-alt mr-2"></i>
                Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  experiences: {
    type: Array,
    required: true
  }
})

const backendTech = ['LARAVEL', 'MySQL', 'PHP', 'Django', 'Flask']
const frontendTech = ['Vue.JS', 'Flutter', 'React', 'Next.JS']

const getTechClass = (tech) => {
  if (backendTech.includes(tech)) {
    return 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
  } else if (frontendTech.includes(tech)) {
    return 'bg-red-500/20 text-red-500 border border-red-500/30'
  }
  return 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
}
</script>
