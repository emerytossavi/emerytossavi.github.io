<template>
  <section id="technologies" class="py-20 bg-[#1a1a1a]">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 font-['Fira_Code']">
        <span class="text-red-500">&lt;</span>
        Technologies
        <span class="text-red-500">/&gt;</span>
      </h2>

      <div class="max-w-6xl mx-auto space-y-12">
        <!-- Languages -->
        <div>
          <h3 class="text-2xl font-bold mb-6 text-cyan-400 font-['Fira_Code'] flex items-center">
            <i class="fas fa-code mr-3"></i>
            Langages
          </h3>
          <div class="flex flex-wrap gap-3">
            <span 
              v-for="lang in technologies.languages" 
              :key="lang"
              class="px-4 py-2 bg-cyan-500/10 border border-cyan-500/50 rounded-lg text-cyan-400 font-['Fira_Code'] text-sm hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300"
            >
              {{ lang }}
            </span>
          </div>
        </div>

        <!-- Frameworks -->
        <div>
          <h3 class="text-2xl font-bold mb-6 text-red-500 font-['Fira_Code'] flex items-center">
            <i class="fas fa-layer-group mr-3"></i>
            Frameworks & Bibliothèques
          </h3>
          <div class="flex flex-wrap gap-3">
            <span 
              v-for="framework in technologies.frameworks" 
              :key="framework"
              :class="getFrameworkClass(framework)"
              class="px-4 py-2 rounded-lg font-['Fira_Code'] text-sm transition-all duration-300"
            >
              {{ framework }}
            </span>
          </div>
        </div>

        <!-- Tools -->
        <div>
          <h3 class="text-2xl font-bold mb-6 text-gray-300 font-['Fira_Code'] flex items-center">
            <i class="fas fa-tools mr-3"></i>
            Outils & Technologies
          </h3>
          <div class="flex flex-wrap gap-3">
            <span 
              v-for="tool in technologies.tools" 
              :key="tool"
              class="px-4 py-2 bg-gray-500/10 border border-gray-500/50 rounded-lg text-gray-300 font-['Fira_Code'] text-sm hover:bg-gray-500/20 hover:border-gray-400 transition-all duration-300"
            >
              {{ tool }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  technologies: {
    type: Object,
    required: true
  }
})

const backendFrameworks = ['Laravel', 'Symfony', 'Flask', 'Django']
const frontendFrameworks = ['Vue.JS', 'React Native', 'Flutter', 'React.JS', 'Next.JS', 'Bootstrap', 'Tailwind CSS']

const getFrameworkClass = (framework) => {
  if (backendFrameworks.includes(framework)) {
    return 'bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500'
  } else if (frontendFrameworks.includes(framework)) {
    return 'bg-red-500/10 border border-red-500/50 text-red-500 hover:bg-red-500/20 hover:border-red-500'
  }
  return 'bg-gray-500/10 border border-gray-500/50 text-gray-300 hover:bg-gray-500/20 hover:border-gray-400'
}
</script>
