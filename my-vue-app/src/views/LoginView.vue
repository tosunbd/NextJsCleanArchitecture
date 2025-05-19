<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50">
    <form @submit.prevent="handleSubmit" class="w-full max-w-md p-8 bg-white rounded shadow">
      <h2 class="mb-6 text-2xl font-bold text-center">Login</h2>

      <input v-model="email" type="email" placeholder="Email" class="w-full px-3 py-2 mb-4 border rounded" required />
      <input v-model="password" type="password" placeholder="Password" class="w-full px-3 py-2 mb-4 border rounded" required />

      <button type="submit" class="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Login</button>
      <p v-if="message" class="mt-4 text-sm text-center text-red-500">{{ message }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const message = ref('');
const router = useRouter();

const handleSubmit = async () => {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email.value, password: password.value })
  });

  const data = await res.json();
  message.value = data.message || '';

  if (res.ok && data.token) {
    localStorage.setItem('token', data.token);
    router.push('/dashboard');
  }
};
</script>
