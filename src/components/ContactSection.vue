<template>
  <section id="contact" class="py-20 bg-[#1a1a1a]">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 font-['Fira_Code']">
        <span class="text-red-500">&lt;</span>
        Contact
        <span class="text-red-500">/&gt;</span>
      </h2>

      <div class="max-w-4xl mx-auto">
        <div class="bg-[#0d1117] p-8 md:p-12 rounded-lg border border-gray-700">
          <p class="text-xl text-center text-gray-300 mb-12 font-['Inter']">
            Vous avez un projet en tête ou souhaitez discuter ? N'hésitez pas à me contacter !
          </p>

          <div class="grid md:grid-cols-2 gap-6">
            <a 
              :href="`mailto:${contact.email}`"
              class="flex items-center p-6 bg-[#1a1a1a] border-2 border-cyan-500/30 rounded-lg hover:border-cyan-500 hover:bg-cyan-500/5 transition-all duration-300 group"
            >
              <i class="fas fa-envelope text-3xl text-cyan-400 mr-4 group-hover:scale-110 transition-transform"></i>
              <div>
                <p class="text-sm text-gray-400 mb-1">Email</p>
                <p class="text-gray-200 font-['Fira_Code'] text-sm">{{ contact.email }}</p>
              </div>
            </a>

            <a 
              :href="`tel:${contact.phone}`"
              class="flex items-center p-6 bg-[#1a1a1a] border-2 border-red-500/30 rounded-lg hover:border-red-500 hover:bg-red-500/5 transition-all duration-300 group"
            >
              <i class="fas fa-phone text-3xl text-red-500 mr-4 group-hover:scale-110 transition-transform"></i>
              <div>
                <p class="text-sm text-gray-400 mb-1">Téléphone</p>
                <p class="text-gray-200 font-['Fira_Code'] text-sm">{{ contact.phone }}</p>
              </div>
            </a>

            <a 
              :href="contact.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center p-6 bg-[#1a1a1a] border-2 border-cyan-500/30 rounded-lg hover:border-cyan-500 hover:bg-cyan-500/5 transition-all duration-300 group"
            >
              <i class="fab fa-linkedin text-3xl text-cyan-400 mr-4 group-hover:scale-110 transition-transform"></i>
              <div>
                <p class="text-sm text-gray-400 mb-1">LinkedIn</p>
                <p class="text-gray-200 font-['Fira_Code'] text-sm">Emery TOSSAVI</p>
              </div>
            </a>

            <a 
              :href="contact.github"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center p-6 bg-[#1a1a1a] border-2 border-red-500/30 rounded-lg hover:border-red-500 hover:bg-red-500/5 transition-all duration-300 group"
            >
              <i class="fab fa-github text-3xl text-red-500 mr-4 group-hover:scale-110 transition-transform"></i>
              <div>
                <p class="text-sm text-gray-400 mb-1">GitHub</p>
                <p class="text-gray-200 font-['Fira_Code'] text-sm">@emerytossavi</p>
              </div>
            </a>
          </div>

          <!-- Additional Info -->
          <div class="mt-12 pt-8 border-t border-gray-700">
            <div class="grid md:grid-cols-2 gap-6 text-center">
              <div>
                <h4 class="text-lg font-bold text-cyan-400 mb-3 font-['Fira_Code']">Langues</h4>
                <div class="flex justify-center gap-3">
                  <span 
                    v-for="lang in languages" 
                    :key="lang"
                    class="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm"
                  >
                    {{ lang }}
                  </span>
                </div>
              </div>

              <div>
                <h4 class="text-lg font-bold text-red-500 mb-3 font-['Fira_Code']">Centres d'intérêt</h4>
                <div class="flex justify-center gap-3">
                  <span 
                    v-for="interest in interests" 
                    :key="interest"
                    class="px-4 py-2 bg-red-500/10 text-red-500 rounded-full text-sm"
                  >
                    {{ interest }}
                  </span>
                </div>
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
  contact: {
    type: Object,
    required: true
  },
  languages: {
    type: Array,
    required: true
  },
  interests: {
    type: Array,
    required: true
  }
})
</script>
