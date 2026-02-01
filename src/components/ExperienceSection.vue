<template>
  <section id="experience" class="py-20 bg-[#1a1a1a]">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 font-['Fira_Code']">
        <span class="text-red-500">&lt;</span>
        Expérience Professionnelle
        <span class="text-red-500">/&gt;</span>
      </h2>

      <div class="max-w-4xl mx-auto">
        <div class="relative border-l-2 border-cyan-500/30 pl-8 ml-4">
          <div 
            v-for="(exp, index) in experiences" 
            :key="index"
            class="mb-12 relative group"
          >
            <!-- Timeline dot -->
            <div class="absolute -left-[2.15rem] top-0 w-4 h-4 rounded-full bg-[#1a1a1a] border-2 border-cyan-500 group-hover:bg-cyan-500 group-hover:scale-125 transition-all duration-300"></div>

            <div class="bg-[#0d1117] p-6 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
              <div class="flex justify-between items-start mb-3 flex-wrap gap-2">
                <h3 class="text-xl font-bold text-cyan-400 font-['Fira_Code']">{{ exp.title }}</h3>
                <span class="text-sm text-gray-400 font-['Fira_Code']">{{ exp.period }}</span>
              </div>

              <p v-if="exp.company" class="text-gray-300 mb-4 flex items-center">
                <i class="fas fa-building mr-2 text-red-500"></i>
                {{ exp.company }}
              </p>

              <p class="text-gray-300 mb-4">{{ exp.description }}</p>

              <div v-if="exp.technologies && exp.technologies.length > 0" class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in exp.technologies" 
                  :key="tech"
                  class="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded text-sm font-['Fira_Code']"
                >
                  {{ tech }}
                </span>
              </div>
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
</script>
