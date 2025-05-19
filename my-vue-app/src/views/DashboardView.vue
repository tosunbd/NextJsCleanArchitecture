<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-green-50 to-white">
    <div class="w-full max-w-2xl p-10 bg-white border shadow-xl rounded-2xl">
      <h1 class="mb-4 text-4xl font-bold text-center text-green-700">🎉 Welcome Back!</h1>
      <p class="mb-6 text-lg text-center text-gray-700">You're now logged in to the Employee Management System.</p>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div class="p-6 transition border rounded-xl hover:shadow-lg">
          <h2 class="mb-2 text-xl font-semibold text-green-600">Employee Directory</h2>
          <p class="text-gray-600">View and manage the list of all employees.</p>
        </div>
        <div class="p-6 transition border rounded-xl hover:shadow-lg">
          <h2 class="mb-2 text-xl font-semibold text-green-600">Profile Settings</h2>
          <p class="text-gray-600">Update your personal information and preferences.</p>
        </div>
        <div class="p-6 transition border rounded-xl hover:shadow-lg">
          <h2 class="mb-2 text-xl font-semibold text-green-600">Reports</h2>
          <p class="text-gray-600">Generate monthly and quarterly reports easily.</p>
        </div>
        <div class="p-6 transition border rounded-xl hover:shadow-lg">
          <h2 class="mb-2 text-xl font-semibold text-green-600">Logout</h2>
          <p class="text-gray-600">Securely exit your session.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  const token = localStorage.getItem('token');
  if (!token) {
    router.push('/login');
  }
});
</script>
