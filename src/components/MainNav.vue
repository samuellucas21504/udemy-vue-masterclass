<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div class="border-brand-gray-1 mx-auto flex h-full flex-nowrap border-b border-solid px-8">
        <a :href="url" class="flex h-full items-center font-sans text-xl font-semibold">
          {{ company }}
        </a>

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
              v-for="(item, index) in menuItems"
              :key="index"
              class="hover:text-bold h-full not-first:ml-9"
            >
              <a :href="item.href" class="flex h-full items-center py-2.5">{{ item.name }}</a>
            </li>
          </ul>
        </nav>

        <div class="ml-auto flex h-full items-center">
          <action-button v-if="!isLoggedIn">Sign in</action-button>
          <profile-image v-else />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from '@/components/ActionButton.vue';
import ProfileImage from '@/components/ProfileImage.vue';

export default {
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage,
  },
  data() {
    return {
      company: 'SLR Careers',
      url: 'https://careers.google.com',
      menuItems: [
        { name: 'Teams', href: '#' },
        { name: 'Locations', href: '#' },
        { name: 'Life at SLR', href: '#' },
        { name: 'How we hire', href: '#' },
        { name: 'Students', href: '#' },
        { name: 'Jobs', href: '#' },
      ],
      isLoggedIn: false,
    };
  },
};
</script>
