<template>
  <div class="add-contact">
    <h2>새 연락처 등록</h2>
    <div class="form-group">
      <label>Name</label>
      <input v-model="datainfo.name" placeholder="Name" required />
    </div>
    <div class="form-group">
      <label>Phone</label>
      <input v-model="datainfo.phone" placeholder="Phone" required />
    </div>
    <div class="form-group">
      <label>Group</label>
      <input v-model="datainfo.group" placeholder="Group" />
    </div>
    <div class="form-group">
      <label>Email</label>
      <input v-model="datainfo.email" placeholder="Email" />
    </div>
    <div class="form-group">
      <label>Address</label>
      <input v-model="datainfo.address" placeholder="Address" />
    </div>
    <button @click="handleAddContact">등록</button>
  </div>
</template>

<script setup>
import { useContact } from '../stores/datainfo.js';

const contactStore = useContact();
const { datainfo, datainfoHandler } = contactStore;

const handleAddContact = () => {
  datainfoHandler(datainfo);
};
</script>

<style scoped>
.add-contact {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
