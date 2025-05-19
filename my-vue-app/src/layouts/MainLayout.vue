<template>
  <div>
    <nav class="flex items-center justify-between px-6 py-4 bg-gray-100 shadow">
      <div class="text-xl font-bold text-blue-600">CleanAuth</div>
      <div class="space-x-4">
        <RouterLink to="/login" class="text-blue-600 hover:underline">Login</RouterLink>
        <RouterLink to="/register" class="text-blue-600 hover:underline">Register</RouterLink>
      </div>
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
// No logic needed here for now
</script>
