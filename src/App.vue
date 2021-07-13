<template>
  <div id="app">
    <div class="m-6">
      <router-link
        class="
          border-2 border-blue-500
          text-blue-500
          hover:border-blue-800
          hover:text-blue-800
          px-4
          py-3
          rounded-lg
        "
        to="/"
      >
        All Repositories
      </router-link>
    </div>

    <div class="max-w-2xl mx-auto">
      <router-view />
    </div>
  </div>
</template>
