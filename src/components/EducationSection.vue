<template>
  <section id="education" class="py-20 bg-[#0d1117]">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 font-['Fira_Code']">
        <span class="text-cyan-400">&lt;</span>
        Formation
        <span class="text-cyan-400">/&gt;</span>
      </h2>

      <div class="max-w-4xl mx-auto">
        <div class="relative border-l-2 border-red-500/30 pl-8 ml-4">
          <div 
            v-for="(edu, index) in education" 
            :key="index"
            class="mb-12 relative group"
          >
            <!-- Timeline dot -->
            <div class="absolute -left-[2.15rem] top-0 w-4 h-4 rounded-full bg-[#0d1117] border-2 border-red-500 group-hover:bg-red-500 group-hover:scale-125 transition-all duration-300"></div>

            <div class="bg-[#1a1a1a] p-6 rounded-lg border border-gray-700 hover:border-red-500/50 transition-all duration-300">
              <div class="flex justify-between items-start mb-3 flex-wrap gap-2">
                <h3 class="text-xl font-bold text-red-500 font-['Fira_Code']">{{ edu.degree }}</h3>
                <span class="text-sm text-gray-400 font-['Fira_Code']">{{ edu.period }}</span>
              </div>

              <p v-if="edu.institution" class="text-gray-300 flex items-center">
                <i class="fas fa-graduation-cap mr-2 text-cyan-400"></i>
                {{ edu.institution }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  education: {
    type: Array,
    required: true
  }
})
</script>
